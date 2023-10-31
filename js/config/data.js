export function getData() {
    const weedingDate = '2024-01-06';
    const weedingDateTime = `${weedingDate}T18:00:00`;
    return {
        weedingDate: weedingDate,
        sections: {
            navbar: {
                label: 'Weeding'
            },
            banner: {
                title: 'Citlali y Salvador',
                subtitle: '2024.01.06',
                weedingDate: weedingDateTime,
                getImage: function (isMobile) {
                    return `images/backgrounds/${isMobile ? 'bg-6.jpg' : 'bg-6.jpg'}`
                }
            },
            hello: {
                location: 'Tepic, Nayarit',
                //description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                weedingDate: weedingDate,
                coupleWrapper: {
                   /* groom: {
                        name: '',
                        description: '',
                        image: 'images/groom.jpg'
                    },*/
                    bride: {
                        name: '',
                        description: '',
                        image: 'images/bg-4.jpg'
                    },
                    textOne: {
                        description: `Juntos hemos decidido decir 'Si' a un futuro lleno de amor y aventuras. Unete a nuestra historia.`
                    },
                    textTwo: {
                        description: `Con la bendicion de Dios y nuestros padres.`
                    },
                    textThree: {
                        description: `Tenemos el gusto de invitarlos a nuestra union matrimonial.`
                    }
                }
            },
            weedingEvents: {
                label: 'Eventos',
                events: [
                    {
                        name: 'Ceremonia Religiosa',
                        date: weedingDate,
                        startAt: '5:00pm',
                        endAt: '6:00pm',
                        locationName: 'Templo Expiatorio del Carmen',
                        address: 'Av. México Nte. 117, Centro, 63000 Tepic, Nay., México',
                        addressHref: 'https://www.google.com/maps/dir//Templo+Expiatorio+del+Carmen,+Tepic,+Av.+México+Nte.+117,+Centro,+63000+Tepic,+Nay.,+México/@21.5065047,-104.8959787,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842736fd96151457:0x344fcb990efcadfe!2m2!1d-104.8935456!2d21.5065556!3e0?entry=ttu'
                    },
                    {
                        name: 'Recepción',
                        date: weedingDate,
                        startAt: '7:00pm',
                        endAt: '12:00pm',
                        locationName: 'Finca Arboledas',
                        address: 'Central 101, Cuauhtémoc, 63180 Tepic, Nay., México',
                        addressHref: 'https://www.google.com/maps/dir//Finca+Arboleda+Central+101+Cuauht%C3%A9moc+63180+Tepic,+Nay.,+M%C3%A9xico/@21.4857117,-104.9046945,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x842736c3470ea7c3:0xd549ac5771ca051e!2m2!1d-104.9047043!2d21.4857347?entry=ttu'
                    }
                ]
            },
            ourStory: {
                label: 'Nuestra Historia',
                //description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                events: [
                    // {
                    //     title: 'First We Meet',
                    //     date: '2017-09-15',
                    //     image: 'images/ourStory/couple-1.jpg',
                    //     description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    // },
                    /*{
                        title: 'First Date',
                        date: '2017-12-19',
                        image: 'images/ourStory/story-2.jpg',
                        description: ''
                    },*/
                    {
                        title: 'In a Relationship',
                        date: '2018-02-13',
                        image: 'images/ourStory/story-3.jpg',
                        description: ''
                    },
                    {
                        title: 'Primer aniversario',
                        date: '2019-02-13',
                        image: 'images/gallery/gallery-2.jpg',
                        description: ''
                    },
                    {
                        title: 'Marry me',
                        date: '2023-02-06',
                        image: 'images/ourStory/story-4.jpg',
                        description: ''
                    },
                    {
                        title: 'Pedida de mano',
                        date: '2023-07-10',
                        image: 'images/ourStory/story-5.jpg',
                        description: ''
                    },
                ]
            },
            gallery: {
                label: 'Galeria',
                //description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                photos: [
                    /*{
                        image: 'images/gallery/gallery-1.jpg',
                        title: '',
                        description: '1er Aniversario'
                    },
                    {
                        image: 'images/gallery/gallery-2.jpg',
                        title: '',
                        description: '1er Aniversario'
                    },
                    {
                        image: 'images/gallery/gallery-3.jpg',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'images/gallery/gallery-4.jpg',
                        title: '',
                        description: 'Titulación \\(•◡•)/'
                    },
                    {
                        image: 'images/gallery/gallery-5.jpg',
                        title: '',
                        description: 'Boda (•◡•)'
                    },
                    {
                        image: 'images/gallery/gallery-6.jpg',
                        title: '',
                        description: 'Boda (•◡•)'
                    },*/
                    {
                        image: 'images/gallery/gallery-7.jpg',
                        title: '',
                        description: 'Marry me ♥‿♥'
                    },
                    {
                        image: 'images/gallery/gallery-8.jpg',
                        title: '',
                        description: 'Marry me ♥‿♥'
                    },
                    {
                        image: 'images/gallery/gallery-9.jpg',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'images/gallery/gallery-10.jpg',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'images/gallery/gallery-11.jpg',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'images/gallery/gallery-12.jpg',
                        title: '',
                        description: ''
                    },
                ]
            },
            attending: {
                title: 'Contamos con tu asistencia?',
                description: 'Favor de confirmar asistencia a tráves del siguiente enlace a Whatsapp',
                btnText: 'Confirmar Asistencia',
                whatsapp: {
                    confirmationPhone: '523112045335',
                    confirmationMessage: 'Soy el Bendito'
                }
            }
        }
    };
}