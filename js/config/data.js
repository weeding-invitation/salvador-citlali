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
                    return `images/backgrounds/${isMobile ? 'bg-6-mobile.png' : 'bg-6.jpg'}`
                }
            },
            hello: {
                location: 'Tepic, Nayarit',
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
                   
                }
            },
            description: {
                textOne: {
                    description: `Juntos hemos decidido decir 'Si' a un futuro lleno de amor y aventuras. Únete a nuestra historia.`
                },
                textTwo: {
                    description: `Con la bendición de Dios y nuestros padres.`
                },
                textThree: {
                    description: `Tenemos el gusto de invitarlos a nuestra unión matrimonial.`
                },
                parentsBride: {
                    mother: "Gloria Ledezma Soria",
                    father: "Juan Sandoval Hernandez"
                },
                parentsGroom: {
                    mother: "Ma. de la luz Llamas López",
                    father: "Salvador González Enríquez"
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
                        startAt: '6:30pm',
                        endAt: '12:00pm',
                        locationName: 'Finca Arboledas',
                        address: 'Central 101, Cuauhtémoc, 63180 Tepic, Nay., México',
                        addressHref: 'https://www.google.com/maps/dir//Finca+Arboleda+Central+101+Cuauht%C3%A9moc+63180+Tepic,+Nay.,+M%C3%A9xico/@21.4857117,-104.9046945,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x842736c3470ea7c3:0xd549ac5771ca051e!2m2!1d-104.9047043!2d21.4857347?entry=ttu'
                    }
                ]
            },
            ourStory: {
                label: 'Nuestra Historia',
                events: [
                    {
                        title: 'Inicio de relación',
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
                        title: 'Propuesta de matrimonio',
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
                photos: [
                    {
                        image: 'images/gallery/gallery-7.jpg',
                        title: '',
                        description: ''
                    },
                    {
                        image: 'images/gallery/gallery-8.jpg',
                        title: '',
                        description: ''
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
                    confirmationPhone: '523114291154',
                    confirmationMessage: 'Hola confirmo asistencia a la boda de Citlali y Salvador'
                }
            }
        }
    };
}