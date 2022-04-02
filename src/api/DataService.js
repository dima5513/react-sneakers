import {initializeApp} from "firebase/app";
import {
    getDatabase,
    set,
    ref,
    onValue,
    get,
    child,
    remove,
    push
} from "firebase/database";
import axios from "axios";

const firebaseConfig = {
    apiKey: "AIzaSyBR0bCCkjI5ws-M_2bfghZ5YZDZkyfZlFQ",
    authDomain: "sneakers-928ec.firebaseapp.com",
    databaseURL:
        "https://sneakers-928ec-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sneakers-928ec",
    storageBucket: "sneakers-928ec.appspot.com",
    messagingSenderId: "38140802999",
    appId: "1:38140802999:web:462cac4ddbe2b9dc765a32",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);

export default class DataService {
    static getProducts = async () => {
        const data = await get(child(ref(database), "products/"));
        return data.val();
    };
    static getCartItems = (cb) => {
        onValue(ref(database, "cart/"), (res) => {
            console.log(res.val())
            if(res.exists()){
                cb(Object.values(res.val()))
            } else{
                cb([])
            }
        });
    };
    static addToCart = (obj) => {
        set(ref(database, `cart/${obj.id}`), obj);
    };
    static removeItem = (id) => {
        remove(child(ref(database), `cart/${id}`));
    };
    static buyItems = (items) => {
        const reference = ref(database,'boughtitems')
        const key = push(reference).key
        set(child(reference, key), items)
    }
    static clearCart = () => {
        remove(ref(database,'cart'))
    }
}
