//definimos la clase nodo
class Nodo{
    constructor(valor){
        this.valor = valor
        this.izquierda = null
        this.derecha = null
    }
}

//definir la clas arbol binario
class ArbolBinario{
    constructor(){
        this.raiz = null        
    }

    //metodo de insertar
    insertar(valor){
        const NuevoNodo = new Nodo(valor)
        
        if(!this.raiz){
            this.raiz = NuevoNodo
        }else{
            this.InsertarNodo(this.raiz, NuevoNodo)
        }
    }

    //metodo insertar nodo
    InsertarNodo(nodo, NuevoNodo){
        if(NuevoNodo.valor < nodo.valor){
            if(!nodo.izquierda){
                nodo.izquierda = NuevoNodo
            }else{
                this.InsertarNodo(nodo.izquierda, NuevoNodo)
            }
        } else{
            if(!nodo.derecha){
                nodo.derecha = NuevoNodo
            }else{
                this.InsertarNodo(nodo.derecha, NuevoNodo)
            }
        }
    }

    RecorridoAmplitud(){
        const resultado = []
        const cola = []

        if(!this.raiz){
            return resultado
        }

        cola.push(this.raiz)

        while(cola.length > 0){
            const NodoActual = cola.shift()
            resultado.push(NodoActual.valor)

            if(NodoActual.izquierda){
                cola.push(NodoActual.izquierda)
            }

            if(NodoActual.derecha){
                cola.push(NodoActual.derecha)
            }
        }

        return resultado
    }

    //Recorrido de profundidad preorden
    RecorridoPreorden(){
        return this.RecorridoPreordenNodo(this.raiz, [])
    }

    RecorridoPreordenNodo(nodo,resultado){
        if(nodo){
            resultado.push(nodo.valor)
            this.RecorridoPreordenNodo(nodo.izquierda, resultado)
            this.RecorridoPreordenNodo(nodo.derecha, resultado)
        }

        return resultado
    }

    //Recorrido en profundidad orden central
    RecorridoOrdenCentral(){
        return this.RecorridoOrdenCentralNodo(this.raiz, [])
    }

    RecorridoOrdenCentralNodo(nodo,resultado){
        if(nodo) {
            this.RecorridoOrdenCentralNodo(nodo.izquierda, resultado)
            resultado.push(nodo.valor)
            this.RecorridoOrdenCentralNodo(nodo.derecha, resultado)
        }

        return resultado
    }

    //Recorrido en profundidad postorden
    RecorridoPostorden(){
        return this.RecorridoPostordenNodo(this.raiz, [])
    }

    RecorridoPostordenNodo(nodo,resultado){
        if(nodo){
            this.RecorridoPostordenNodo(nodo.izquierda, resultado)
            this.RecorridoPostordenNodo(nodo.derecha, resultado)
            resultado.push(nodo.valor)
        }

        return resultado
    }
}

//crear el arbol

const arbol = new ArbolBinario()
arbol.insertar(10)
arbol.insertar(5)
arbol.insertar(15)
arbol.insertar(3)
arbol.insertar(7)
arbol.insertar(12)
arbol.insertar(18)

console.log("Recorrido en amplitud:", arbol.RecorridoAmplitud())
console.log("Recorrido en profundidad Preorden:", arbol.RecorridoPreorden())
console.log("Recorrido en profundidad Orden Central:", arbol.RecorridoOrdenCentral())
console.log("Recorrido en profundidad Postorden:", arbol.RecorridoPostorden())