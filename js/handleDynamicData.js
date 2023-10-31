import { getData } from './config/data.js';
import { getConfig } from './config/env.js';

/**
 * Main function
 */
function buildPage() {
    const _data = getData();
    setNavbar(_data.sections.navbar);
    setBanner(_data.sections.banner);
    setHello(_data.sections.hello);
    setWeedingEvents(_data.sections.weedingEvents);
    setOurStory(_data.sections.ourStory);
    setGallery(_data.sections.gallery);
    setAttending(_data.sections.attending);
}

/**
 * Function to setup page
 */
function setupPage() {
    moment.locale('es', {
        months: 'Enero_Febrero_MaFrzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
    });
}

/**
 * Function to set navbar info
 * @param {*} navbar 
 */
function setNavbar(navbar) {
    if (navbar) {
        $('#fh5co-logo a').html(navbar.label);
    }
}

/**
 * Function to set banner info
 * @param {*} banner 
 */
function setBanner(banner) {
    if (banner) {
        $('#fh5co-header').css('background-image', `url("${buildImagePath(banner.getImage(isMobileDevice()))}")`);
        $('.display-tc h1').html(banner.title);
        $('.display-tc h2').html(banner.subtitle);
        if (!isMobileDevice()) {
            setCountdown(banner.weedingDate);
        }
    }
}

/**
 * Function to display hello section
 * @param {*} hello 
 */
function setHello(hello) {
    if (hello) {
        const formatedDate = moment(hello.weedingDate).format('MMMM DDDo, YYYY');
        $('.fh5co-heading h3').html(`${formatedDate} ${hello.location}`);
        $('#hello-section-description-id').html(hello.description);

        if (hello.coupleWrapper && hello.coupleWrapper.groom) {
            $('.groom img').css('background-image', `url("${buildImagePath(hello.coupleWrapper.groom.image)}")`);
            $('.desc-groom h3').html(hello.coupleWrapper.groom.name);
            $('.desc-groom p').html(hello.coupleWrapper.groom.description);
        }

        if (hello.coupleWrapper && hello.coupleWrapper.bride) {
            $('.bride img').css('background-image', `url(${buildImagePath(hello.coupleWrapper.bride.image)})`);
            $('.desc-bride h3').html(hello.coupleWrapper.bride.name);
            $('.desc-bride p').html(hello.coupleWrapper.bride.description);
        }

        if (hello.coupleWrapper && hello.coupleWrapper.textOne) {
            $('.textOne h3').html(hello.coupleWrapper.textOne.description);
        }
        if (hello.coupleWrapper && hello.coupleWrapper.textTwo) {
            $('.textTwo p').html(hello.coupleWrapper.textTwo.description);
        }
        if (hello.coupleWrapper && hello.coupleWrapper.textThree) {
            $('.textThree p').html(hello.coupleWrapper.textThree.description);
        }
    }
}

/**
 * Function to display weeding events info
 * @param {*} weedingEvents 
 */
function setWeedingEvents(weedingEvents) {
    if (weedingEvents) {
        $('#weeding-events-label').html(weedingEvents.label);
        weedingEvents.events.forEach(_event => {
            const weedingEvent = getWeedingEventTemplate(_event);
            $('#weeding-events-content-id').append(weedingEvent);
        });
    }
}

/**
 * Function to generate html weeding event
 * @param {*} _event 
 * @returns 
 */
function getWeedingEventTemplate(_event) {
    return `
        <div class="col-md-6 col-sm-6 ">
            <div class="event-wrap animate-box">
                <h3 class="text-center">${_event.name}</h3>
                <div class="row">
                    <div class="col-sm-12">
                        <span class="align-middle"><i class="icon-calendar"></i> &nbsp;${moment(_event.date).format('MMMM DD, YYYY')}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <span class="align-middle">
                            <i class="icon-clock"></i>&nbsp;
                            ${_event.startAt} - ${_event.endAt}
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <span class="align-middle">
                            <i class="icon-location"></i>&nbsp;
                            ${_event.locationName}:
                            ${_event.address}
                        </span>
                        <br>
                        <a 
                            target="_blank"
                            class="btn btn-primary btn-block"
                            href="${_event.addressHref}"
                            >Como Llegar</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Function to generate our story timeline
 * @param {*} ourStory 
 */
function setOurStory(ourStory) {
    if (ourStory) {
        $('#ourstory-section-title-id').html(ourStory.label);
        $('#ourstory-section-description-id').html(ourStory.description);
        ourStory.events.forEach((_event, i) => {
            let ourStoryEvent = getOurStoryEventTemplate(_event, i);
            if (i != (ourStory.events.length - 1)) {
                ourStoryEvent += '<br>';
            }
            $('#timeline-id').append(ourStoryEvent);
        });
    }
}

/**
 * Function to generate html timeline event
 * @param {*} _event 
 * @param {*} position 
 * @returns 
 */
function getOurStoryEventTemplate(_event, position) {
    const timeLineInverted = position % 2 !== 0;
    return `
        <li class="${timeLineInverted ? 'timeline-inverted animate-box' : 'animate-box'}">
            <div class="timeline-badge" style="background-image:url(${_event.image});"></div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4 class="timeline-title">${_event.title}</h4>
                    <span class="date">${moment(_event.date).format('MMMM DD, YYYY')}</span>
                </div>
                <div class="timeline-body">
                    <p>${_event.description}</p>
                </div>
            </div>
        </li>
    `;
}

/**
 * Function to display gallery
 * @param {*} gallery 
 */
function setGallery(gallery) {
    $('#gallery-section-title-id').html(gallery.label);
    $('#gallery-section-description-id').html(gallery.description);
    gallery.photos.forEach(photo => {
        const pic = getPhotoTemplate(photo);
        $('#fh5co-gallery-list').append(pic);
    });
}

/**
 * Function to generate photo gallery html
 * @param {*} photo 
 * @returns 
 */
function getPhotoTemplate(photo) {
    return `
    <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(${photo.image}); ">
    <div class="case-studies-summary">
        <span>${photo.description}</span>
        <h2>${photo.title}</h2>
    </div>
    </li>`;
}

/**
 * Function to handle countdown weeding date
 * @param {*} weedingDate 
 */
function setCountdown(weedingDate) {
    const d = new Date(weedingDate);
    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
    });

    $('#simply-countdown-losange').simplyCountdown({
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: false
    });
}

/**
 * Function to return correct path for each environment
 * @param {*} fileName 
 */
function buildImagePath(fileName) {
    let url = '';
    const _config = getConfig();
    switch (_config.env) {
        case 'PROD':
            url = `${_config.githubURL}/${fileName}`;
            break;
        default:
            url = `../${fileName}`;
            break;
    }
    return url;
}

/**
 * Function to check if device is mobile
 * @return boolean
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Function to set attending section
 * @param {*} attending 
 */
function setAttending(attending) {
    if (attending) {
        $('#attending-section-title-id').html(attending.title);
        $('#attending-section-description-id').html(attending.description);
        if (attending.whatsapp) {
            loadWhatsapp(attending, attending.whatsapp);
        }
    }
}

function loadWhatsapp(attending, whtsappCfg) {
    if (whtsappCfg.confirmationPhone && whtsappCfg.confirmationMessage) {
        const message = whtsappCfg.confirmationMessage.replace(' ', '%20');
        const confirmationURL = `https://wa.me/${whtsappCfg.confirmationPhone}?text=${message}`;
    
        $('#attending-section-url-id').text(attending.btnText);
        $('#attending-section-url-id').attr('href', confirmationURL);
    }
}

setupPage();
buildPage();