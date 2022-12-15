const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

let pagina = [
    {
        id: 1,
        historia: "Do lado de fora da casa está caindo uma tempestade. As gotas de chuva se chocam fortemente contra o chão, as paredes e o telhado. É possível ouvir o vento balançando cada folha das árvores da rua, ele carrega a chuva, aumentando sua velocidade. O céu está escuro como nunca esteve, as nuvens pesadas criam raios e trovões que rugem como leões, fazendo as paredes tremerem.<br> ${variavel} continua dormindo, escondendo-se embaixo de suas cobertas. Fingindo não ouvir o mundo caindo lá fora. ( ) franze a testa quando sente um pingo de água cair em seu rosto. Depois outra e mais outra. ( ) vira-se na cama tentando fugir das goteiras, quando ouve o telhado de sua casa desabando, causando um barulho muito alto. ( ) levanta-se com um sobressalto, olhando pelo quarto. Havia pedaços de madeira, cerâmica e concreto do chão. Do buraco no teto caía tanta água quanto uma cascata. Um trovão rugiu ao mesmo tempo que um raio iluminou o cômodo tal qual a luz do dia e ( ) pôde ver a água subindo, inundando desenfreadamente seu quarto.<br>Com desespero, ( ) levantou da cama, molhando seus pés descalços. Correu até a porta e agarrou a maçaneta ao tentar abri-la. Sacudiu a porta com força algumas vezes até perceber que a mesma estava trancada. ( ) nunca trancava a porta do seu quarto antes de ir dormir. Olhou bem a fechadura, já não havia espaço para se pôr uma chave. Pedia uma senha numérica. As paredes tremeram com outro trovão, assim como suas pernas. A água subia, estava quase alcançando os seus joelhos. ( ) correu até as janelas, talvez fosse uma alternativa mais rápida de fuga, mas não teve sucesso. Decidiu procurar pela senha.<br>Abriu as gavetas da cômoda até encontrar um caderno. Só poderia estar alí. Folheou rapidamente tentando encontrar onde havia anotado. Porém tudo que encontrou foram contas e mais contas de matemática. Uma em específico que lhe tirou do sério ao trazer a lembrança da dor de cabeça que tivera. Quase três páginas de conta para que, no final de tudo, o resultado fosse 1. Largou o caderno, não havia nada lá.<br>Procurou na estante, vasculhou cada fileira, tirou tudo de lugar. Sequer um papelzinho. Mexeu tanto em todos os objetos do móvel que acabou derrubando seu jarro com trevos de 4 folhas na água. Seu coração apertou, gostava de suas plantinhas. Mas o mais importante agora era fugir.<br>Andou até sua cama, a água já em sua cintura atrapalhando a locomoção. Haviam alguns objetos na cabeceira. Pequenos coelhinhos de porcelana"
    },
    {
        id: 2,
        historia:"fegwgwrg"

    },
    {
        id: 3,
        historia: "fdgdfgfgd"
    },
    {
        id: 4,
        historia: "dfgdfgdgd"
    }
  ]

app.listen(3000, () => console.log('server started'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
});

app.get('/pagina', (req, res) => {
  res.json(pagina);
});

app.get('/pagina/:id', (req, res) => {
    let id = req.params.id;
    let prod = pagina.filter(p => p.id == id)[0];
    res.json(prod);    
});
