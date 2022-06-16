export class ContaCorrente{
    agencia
    cliente
    _saldo = 0 // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor          
    }

    transferir(valor, conta){        
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)        
    }
}