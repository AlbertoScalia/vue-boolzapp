const { createApp } = Vue

createApp({
    data() {
        return {
            newMessage: '',
            activeContact: 0,
            resultedContacts: '',
            show: false,
            dropdownShow: false,
            currentMessage: null,
            newReceivedMessage: {
                date: '',
                message: 'Ok.',
                status: 'received'
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: '/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    methods: {
        splitDate(element, i) {
            const time = element.date.split(' ').pop();
            let noSecArray = time.split(':');
            noSecArray.pop();
            const noSecTime = noSecArray.join(':')

            return noSecTime
        },

        //Selezione chat
        selectChat(i) {
            this.activeContact = i
        },

        //Invio nuovo messaggio
        sendMessage(i) {
            const newMessageDate = new Date();
            const now = [newMessageDate.getHours(), (newMessageDate.getMinutes() < 10 ? '0' : '') + newMessageDate.getMinutes(), newMessageDate.getSeconds()].join(':');
            const newMessage = {
                date: now,
                message: this.newMessage,
                status: 'sent'
            };

            this.contacts[i].messages.push(newMessage);
            this.newMessage = ''

            setTimeout(this.recivedMessage, 1000);
        },

        //Messaggio automatico di risposta
        recivedMessage() {
            const newReceivedMessage = { ...this.newReceivedMessage };
            const newDate = new Date();
            const now = [newDate.getHours(), (newDate.getMinutes() < 10 ? '0' : '') + newDate.getMinutes(), newDate.getSeconds()].join(':');
            newReceivedMessage.date = now;
            this.contacts[this.activeContact].messages.push(newReceivedMessage)
        },

        //Selezione messaggio
        selectMessage(i) {
            this.currentMessage = i
        },

        //Per aprire lo showdown
        showDropdown() {
            if (this.dropdownShow === false) {
                this.dropdownShow = true;
            } else if (this.dropdownShow === true) {
                this.dropdownShow = false
            }
        },

        //Per cancellare i messaggi
        deleteMessage(i) {
            const thisMessage = this.contacts[this.activeContact].messages[i]
            this.contacts[this.activeContact].messages.pop(thisMessage)
        },

        //Per mostrare in lista l'ultimo messaggio della rispettiva chat
        lastMessage(index) {
            const messageArray = this.contacts[index].messages
            const lastMessageIndex = messageArray.length - 1;

            return lastMessageIndex
        }

    }
}).mount('#app')

