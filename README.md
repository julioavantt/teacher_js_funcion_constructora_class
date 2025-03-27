# Ejercicio: Simulador de Cuenta Bancaria

## Descripción

**Simulador de cuenta bancaria** desarrollado en **JavaScript** utilizando una **clase**. Permite a un usuario realizar operaciones básicas sobre su cuenta, tales como:

- Depositar dinero.
- Retirar fondos.
- Consultar su saldo.

## Requisitos

Para desarrollar el simulador, se debe crear una **clase `CuentaBancaria`** con las siguientes características:

### Constructor:

- Recibe el nombre del titular y un saldo inicial opcional (por defecto, 0).

### Métodos:

- `depositar(monto)`: Aumenta el saldo de la cuenta si el monto es válido.
- `retirar(monto)`: Permite retirar dinero si hay saldo suficiente.
- `verSaldo()`: Muestra el saldo actual de la cuenta.

### Instancia:

- Crear una instancia de la clase `CuentaBancaria` con un titular y un saldo inicial.

### Pruebas:

- Depositar dinero.
- Retirar dinero (caso exitoso y caso con fondos insuficientes).
- Consultar el saldo después de cada operación.

## Ejemplo de Uso

```plaintext
Saldo inicial de Juan: $1000
Depósito de $500 realizado. Saldo actual: $1500
Retiro de $300 realizado. Saldo actual: $1200
Fondos insuficientes o monto inválido.
Saldo final de Juan: $1200
```
