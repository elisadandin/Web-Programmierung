import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    //Produkte mit Informationen des Shops in State-Objekt angeben
    state = {
        products: [
            {
                "_id": "1",
                "title": "Fitnessbänder",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6-MbQhULhxtcYrfFrc-UAl_3VsmOftkhXln8OXL_KEXzamcAsXs4M3EP0Cdg_3R071olb-0A&usqp=CAc",
                "description": "Fitnessbänder für das gezielte Training",
                "price": 29.99,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Hanteln - leicht",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7c7jIKfHIqw9fCEQy_xmeUaKMie8_EGkSiA&usqp=CAU",
                "description": "5kg Kurzhantel 2er Set",
                "price": 19.99,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Hanteln - schwer",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_ggo8sgHZCBHfVV7QWEzqU1oe9W6GX6lMA&usqp=CAU",
                "description": "15kg Kurzhantel 2er Set",
                "price": 24.99,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Trainingsmatte",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsdVqLKgSsy89P2fW69wGLqxLpxg2PzZFevyc3QQOPHc6OAX5L---Ar1jtsmYZwnqCrqadjA&usqp=CAc",
                "description": "Premium Qualität, rutschfest",
                "price": 39.99,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Springseil",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphm4xXNUCbhGim42k5-pS85YuviFahP7zgFHUYdLxGM4NUTDCiaSgCfVL5I3QQXZjV8SVBqI&usqp=CAc",
                "description": "Profi-Springseil",
                "price": 14.99,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Boxhandschuhe",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4si1CP73SLRLlW51U6UemMng3-cr-Fc3Bjb6iqL-w_EL1Wj3OIupvJNEx1D7y3P7DNzuQPb2S&usqp=CAc",
                "description": "Leder Boxhandschuhe",
                "price": 49.99,
                "count": 1
            },
            {
                "_id": "7",
                "title": "Boxsack",
                "src": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScXzd76JlwyIc2KsE4i0qEGsB4HLRi_BB0GRzJf0xTzx5--kAR8NvLWnw2BwB_pzfNoqYfBRvHFMSywvG32FN6pQy0vgDfUw0HAPaiSamM&usqp=CAE",
                "description": "Boxsack mit einer Länge von 84 cm",
                "price": 99.99,
                "count": 1
            },
            {
                "_id": "8",
                "title": "Klimmzugstange",
                "src": "data:image/jpeg;base64,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",
                "description": "Premium Klimmzugstange",
                "price": 49.99,
                "count": 1
            },
            {
                "_id": "9",
                "title": "Trinkflasche",
                "src": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnP-ppc7WqqFBtOaHQi4UQCDhThkYKJqxBGSzfmoGscsHn2_-XbnzL7UjpuNr_PqT-inmglxxUMSYoQ7iCaFW467zyzCZ6M7IT3LA0-ybJ4AkdUD5V5ufq&usqp=CAE",
                "description": "Sportwassserflasche",
                "price": 12.99,
                "count": 1
            },
            {
                "_id": "10",
                "title": "Protein Shaker",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZM_19TdEZSTR8OvHW1Wun_jYPWYR0l8FH8VflY_n2F_bbyLNZLkBM5DuXGQEgw57BdKZhCde&usqp=CAc",
                "description": "Maximale Füllmenge: 700ml",
                "price": 9.99,
                "count": 1
            }
        ],
        cart: [],
        total: 0

    };

    //Artikel zum Warenkorb hinzufügen
    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        const data = products.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    };


    //Artikel aus Warenkorb entfernen
    remove = id =>{
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item._id === id){
                cart.splice(index, 1)
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    //Gesamtsumme bestimmen
    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price*item.count);
        },0)
        this.setState({total: res})
    }


    render() {
        const {products, cart, total} = this.state;
        const {addCart,remove, getTotal} = this;
        return (
            <DataContext.Provider value={{products, addCart, cart, remove, total, getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

