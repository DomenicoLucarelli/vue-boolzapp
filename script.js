const { createApp } = Vue

  createApp({
    data() {
      return {

        contacts: [
          {
              name: 'Michele',
              avatar: 'img/avatar_1.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 16:15',
                      message: 'Tutto fatto!',
                      status: 'received',
                      isClick: false,
                      isClick: false
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: 'img/avatar_2.jpg',
              visible: true,
              messages: [
                  {
                      date: '16:30',
                      message: 'Ciao come stai?',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: '16:30',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received',
                      isClick: false
                  },
                  {
                      date: '16:35',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: 'img/avatar_3.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 10:10',
                      message: 'La Marianna va in campagna',
                      status: 'received',
                      isClick: false
                  },
                  {
                      date: ' 10:20',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 16:15',
                      message: 'Ah scusa!',
                      status: 'received',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: 'img/avatar_4.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: 'img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'Va bene, stasera la sento',
                      status: 'received',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: 'img/avatar_5.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'Non ancora',
                      status: 'received',
                      isClick: false
                  },
                  {
                      date: ' 15:51',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: 'img/avatar_7.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received',
                      isClick: false
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: 'img/avatar_8.jpg',
              visible: true,
              messages: [
                  {
                      date: ' 15:30',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received',
                      isClick: false
                  },
                  {
                      date: ' 15:50',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent',
                      isClick: false
                  },
                  {
                      date: ' 15:51',
                      message: 'OK!!',
                      status: 'received',
                      isClick: false
                  }
              ],
          }
        ],

        // creo un indice che cambia qunado clicco su un utente
        activeIndex : 0,
        
        
        

        newMessage : {
            date: `${new Date().toLocaleTimeString("it-IT",{
                hour:'numeric',
                minute:"numeric",

            })}`,
            message: '',
            status: 'sent',
            isClick: false
        },

        newReceivedMessage :{
            date: `${new Date().toLocaleTimeString("it-IT",{
                hour:'numeric',
                minute:"numeric",

            })}`,
            message: 'Ok',
            status: 'received',
            isClick: false
        },

        name : '',

        isDropdownVisible: false,

        
      
      }
    },

    methods: {
      
      // creo funzione che mi permette di visualizzare il contenuto della chat al click sull'utente

      showChat(index){
        this.activeIndex = index
      },
    //   creo funzione che invia nell'array un oggetto al giusto indice
      send(){
        this.contacts[this.activeIndex].messages.push(this.newMessage)
        this.newMessage = {
            date: `${new Date().toLocaleTimeString("it-IT",{
                hour:'numeric',
                minute:"numeric",

            })}`,
            message: '',
            status: 'sent'
        }
        // creo funzione timeout che al click di enter richiama la funzione receivedMessage
        setTimeout(this.receivedMessage,1000)
      },
    //   creo funzione che mi pusha nell'array al giusto indice un oggetto che è la risposta al mio messaggio
      receivedMessage(){
        this.contacts[this.activeIndex].messages.push(this.newReceivedMessage)
      },
            
      isOnOrOff(index){
        if(this.contacts[this.activeIndex].messages[index].isClick == false){
            this.contacts[this.activeIndex].messages[index].isClick = true

        }else{
            this.contacts[this.activeIndex].messages[index].isClick = false
        }

        
      },

      deleteMessage(index){
        this.contacts[this.activeIndex].messages.splice(index , 1)
      },

      dropDown(){
        
            this.isDropdownVisible = true
        },

        dropUp(){
        
            this.isDropdownVisible = false
        },

    },
  }).mount('#app')