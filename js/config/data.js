export function getData() {
    const weedingDate = '2024-01-06';
    const weedingDateTime = `${weedingDate}T16:00:00`;
    return {
        weedingDate: weedingDate,
        sections: {
            navbar: {
                label: 'Weeding'
            },
            banner: {
                title: 'Salvatore & Lupe',
                subtitle: 'We are getting Married',
                weedingDate: weedingDateTime,
                image: 'images/backgrounds/img_bg_4.jpg'
            },
            hello: {
                location: 'Tepic, Nayarit',
                description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                weedingDate: weedingDate,
                coupleWrapper: {
                    groom: {
                        name: 'Salvatore Gonzalez',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
                        image: 'images/groom.jpg'
                    },
                    bride: {
                        name: 'Citlali Sandoval',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove',
                        image: 'images/bride.jpg'
                    }
                }
            },
            weedingEvents: {
                label: 'Weeding Events',
                events: [
                    {
                        name: 'Ceremonia Religiosa',
                        date: weedingDate,
                        startAt: '4:00pm',
                        endAt: '5:00pm',
                        locationName: 'Templo Expiatorio del Carmen',
                        address: 'Av. México Nte. 117, Centro, 63000 Tepic, Nay., México',
                        addressHref: 'https://www.google.com/maps/dir//Templo+Expiatorio+del+Carmen,+Tepic,+Av.+México+Nte.+117,+Centro,+63000+Tepic,+Nay.,+México/@21.5065047,-104.8959787,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842736fd96151457:0x344fcb990efcadfe!2m2!1d-104.8935456!2d21.5065556!3e0?entry=ttu'
                    },
                    {
                        name: 'Recepción',
                        date: weedingDate,
                        startAt: '6:00pm',
                        endAt: '11:00pm',
                        locationName: 'Finca Arboledas',
                        address: 'Central 101, Cuauhtémoc, 63180 Tepic, Nay., México',
                        addressHref: 'https://www.google.com/maps/dir//Finca+Arboleda+Central+101+Cuauht%C3%A9moc+63180+Tepic,+Nay.,+M%C3%A9xico/@21.4857117,-104.9046945,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x842736c3470ea7c3:0xd549ac5771ca051e!2m2!1d-104.9047043!2d21.4857347?entry=ttu'
                    }
                ]
            },
            ourStory: {
                label: 'Nuestra Historia Perraa!!, algo bien',
                description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                events: [
                    {
                        title: 'First We Meet',
                        date: '2017-09-15',
                        image: 'images/ourStory/couple-1.jpg',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    },
                    {
                        title: 'First Date',
                        date: '2017-12-19',
                        image: 'images/ourStory/couple-2.jpg',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    },
                    {
                        title: 'In a Relationship',
                        date: '2018-02-13',
                        image: 'images/ourStory/couple-3.jpg',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    },
                    {
                        title: 'Marry me',
                        date: '2023-02-06',
                        image: 'images/ourStory/couple-3.jpg',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    },
                    {
                        title: 'Pedidona de mano',
                        date: '2023-07-10',
                        image: 'images/ourStory/couple-3.jpg',
                        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
                    },
                ]
            },
            gallery: {
                label: 'Weeding Gallery',
                description: 'Te invitamos a celebrar nuestra boda ʕ•ᴥ•ʔ',
                photos: [
                    {
                        image: 'images/gallery/gallery-1.jpg',
                        title: 'Two Glas of Juice'
                    },
                    {
                        image: 'images/gallery/gallery-2.jpg',
                        title: 'Timer starts now!'
                    },
                    {
                        image: 'images/gallery/gallery-3.jpg',
                        title: 'Beautiful sunset'
                    },
                    {
                        image: 'images/gallery/gallery-4.jpg',
                        title: 'Company Conference Room'
                    },
                    {
                        image: 'images/gallery/gallery-5.jpg',
                        title: 'Useful baskets'
                    },
                    {
                        image: 'images/gallery/gallery-6.jpg',
                        title: 'Skater man in the road'
                    },
                    {
                        image: 'images/gallery/gallery-7.jpg',
                        title: 'Two Glas of Juice'
                    },
                    {
                        image: 'images/gallery/gallery-8.jpg',
                        title: 'Timer starts now!'
                    },
                    {
                        image: 'images/gallery/gallery-9.jpg',
                        title: 'Beautiful sunset'
                    },
                ]
            }
        }
    };
}