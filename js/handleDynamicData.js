function updateSections() {
    console.log(_data);
    setNavbar(_data.sections.navbar);
    setBanner(_data.sections.banner);
    setHello(_data.sections.hello);
    setWeedingEvents(_data.sections.weedingEvents);
    setOurStory(_data.sections.ourStory);
    setGallery(_data.sections.gallery);
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
        $('#fh5co-header').css('background-image', `url(../images/${banner.image})`);
        $('.display-tc h1').html(banner.title);
        $('.display-tc h2').html(banner.subtitle);
        setCountdown(_data.weedingDate);
    }
}

/**
 * Function to display hello section
 * @param {*} hello 
 */
function setHello(hello) {
    if (hello) {
        const formatedDate = moment(_data.weedingDate).format('MMMM DDDo, YYYY');
        $('.fh5co-heading h3').html(`${formatedDate} ${hello.location}`);
        $('#hello-section-description-id').html(hello.description);

        if (hello.coupleWrapper && hello.coupleWrapper.groom) {
            $('.groom img').css('background-image', `url(../images/${hello.coupleWrapper.groom.image})`);
            $('.desc-groom h3').html(hello.coupleWrapper.groom.name);
            $('.desc-groom p').html(hello.coupleWrapper.groom.description);
        }

        if (hello.coupleWrapper && hello.coupleWrapper.bride) {
            $('.bride img').css('background-image', `url(../images/${hello.coupleWrapper.bride.image})`);
            $('.desc-bride h3').html(hello.coupleWrapper.bride.name);
            $('.desc-bride p').html(hello.coupleWrapper.bride.description);
        }
    }
}

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
            const ourStoryEvent = getOurStoryEventTemplate(_event, i);
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
                    <h3 class="timeline-title">${_event.title}</h3>
                    <span class="date">${moment(_event.date).format('MMMM DD, YYYY')}</span>
                </div>
                <div class="timeline-body">
                    <p>${_event.description}</p>
                </div>
            </div>
        </li>
    `;
}

function setGallery(gallery) {
    $('#gallery-section-title-id').html(gallery.label);
    $('#gallery-section-description-id').html(gallery.description);
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

    //jQuery example
    $('#simply-countdown-losange').simplyCountdown({
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: false
    });
}

updateSections();