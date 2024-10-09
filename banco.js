const mongoose = require('mongoose');

// URL de conexão ao MongoDB
const uri = 'mongodb://localhost:27017/hospital'; // Substitua pelo seu URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexão ao MongoDB estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });
const usuarioSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    email: String
  });
  
const Usuario = mongoose.model('pacientes', usuarioSchema);
  
const novoUsuario = new Usuario({
    nome: 'CHUPA MONGO DB',
    idade: 69,
    email: '<3>'
  });
  
  novoUsuario.save()
    .then(() => {
      console.log('Usuário salvo com sucesso!');
    })
    .catch(err => {
      console.error('Erro ao salvar usuário:', err);
    });
  