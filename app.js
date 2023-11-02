// Plantilla base para los dos ejercicios
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = newNode;
        }
    }

    displayAllNodes() {
        const allNodes = [];
        let current = this.head;
        while(current) {
            allNodes.push(current.value);
            current = current.next;
        }
        console.log(allNodes);
    }
    
    // Ejercicio 1 - Funcion para insertar un dato si no esta repetido
    pushIfNotIncluded(item) {
        const newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let isIncluded = false;
            while(current) {
                if (current.value === newNode.value) {
                    isIncluded = true;
                    break;
                }
                previous = current;
                current = current.next;
            }
            if(!isIncluded) {
                previous.next = newNode;
            }
        }
    }

    // Ejercicio 2.2 - Funcion para mostrar todos los nodos de la lista que superen un valor determinado
    displayNodesGreaterThan(threshold){
        let current = this.head;
        const greaterNodes = [];
        while(current) {
            if(current.value > threshold) {
                greaterNodes.push(current.value);
            }
            current = current.next;
        }
        console.log(greaterNodes)
    }
}

// Testeo para el ejercicio 1
const list = new LinkedList();
list.insertAtEnd('bestätigen');
list.insertAtEnd('anzufordern');
list.insertAtEnd('erstellen');
list.insertAtEnd('drücken');
list.insertAtEnd('vertreten');
list.insertAtEnd('erfinden');

list.displayAllNodes();

const wordInc = 'anzufordern';
const wordNew = 'vermitteln';

list.pushIfNotIncluded(wordNew);
list.pushIfNotIncluded(wordInc);
list.displayAllNodes();

// Ejercicio 2.1 - Crear 2 listas enlazadas de numeros enteros positivos al azar insertando cada uno por el ultimo nodo
const list2 = new LinkedList();
const list3 = new LinkedList();

for (let i = 0; i < 10; i++) {
    list2.insertAtEnd(Math.floor(Math.random() * 100) + 1);
    list3.insertAtEnd(Math.floor(Math.random() * 100) + 1);
}

// Testeo para el ejercicio 2
list2.displayAllNodes();
list3.displayAllNodes();
list2.displayNodesGreaterThan(23);
list3.displayNodesGreaterThan(47);


