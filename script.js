// Gerador de senha aleatória
const generateRandomPassword = (length, includeNumbers) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    let charset = letters

    // Adicionar números se for pedido
    if (includeNumbers) {
        charset += numbers
    }

    // Ajuste do comprimento da senha
    if (length < 8) {
        alert('Comprimento muito curto. Ajustando para 8 caracteres.')
        length = 8;
    } else if (length > 128) {
        alert('Comprimento muito longo. Ajustando para 128 caracteres.')
        length = 128
    }

    // Geração da senha
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.random() * charset.length; // Gera um índice aleatório
        password += charset.charAt(randomIndex | 0); // Converte para inteiro e adiciona ao password
    }

    alert('Senha Gerada: ' + password)
}

// Pedir a pessoa o comprimento da senha
const lengthInput = prompt('Digite o comprimento desejado para a senha (mínimo 8, máximo 128):')

// Perguntar se deseja incluir números
let includeNumbersInput = prompt('Deseja incluir números na senha? (s/n)')
includeNumbersInput = (includeNumbersInput.toLowerCase() === 's')

// Converte a entrada do comprimento para número
const length = parseInt(lengthInput)

// Gera e exibe a senha
generateRandomPassword(length, includeNumbersInput)
