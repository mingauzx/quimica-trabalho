# Química em Movimento

Site estático do trabalho de **Química 3 — IFMS Campus Ponta Porã**, sobre cinética química, equilíbrio químico e equilíbrio iônico da água.

## Como usar

Abra `index.html` no navegador. Não é necessário instalar dependências, Node.js ou SQL.

## O que já existe

- Três módulos temáticos responsivos;
- Laboratório conceitual de cinética com controles;
- Ilustração interativa do Princípio de Le Chatelier;
- Escala de pH/pOH com exemplos do cotidiano e simulador PhET;
- Quatro questões reais do ENEM (com resumos autorais, links oficiais e resoluções);
- Bibliografia e seção para dois vídeos.

## O que ainda falta para a entrega

1. Gravar os **dois vídeos autorais** exigidos pela professora: um experimento seguro e uma observação cotidiana que trate do outro tema, e incorporá-los no local dos cartões de vídeo.
2. Conferir os créditos da equipe já preenchidos no rodapé.
3. Conferir as referências bibliográficas com as edições efetivamente consultadas pelo grupo. As fontes aparecem após cada tema e questão; os dados das edições foram completados.
4. Revisar com a professora os resumos das questões ENEM e registrar os créditos das imagens/vídeos incluídos posteriormente.
5. Entregar o URL público no Moodle até **01/12/2026** (conforme instruções fornecidas).

## Inserindo os vídeos do YouTube

Localize no `index.html` os blocos `<div class="video-display">` e substitua cada bloco por um `iframe` responsivo do YouTube ou adapte o conteúdo para incorporar esse iframe. Use apenas links acessíveis sem login.

## Deploy pela Vercel

Vercel → Add New → Project → Import `mingauzx/quimica-trabalho`. Escolha **Other** como Framework Preset, diretório raiz `.`, nenhum Build Command, Output Directory `.`. Em seguida, Deploy.

A Vercel publicará novamente o site automaticamente a cada commit no GitHub.

## Fontes para checagem

- Provas e gabaritos do ENEM: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos
- Simulador de escala pH: https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=pt_BR

Os índices exibidos no laboratório de cinética são **meramente ilustrativos**, não dados de laboratório. Para a equação pH + pOH = 14, foi adotada a temperatura de **25 ºC**.

## Equipe

Miguel Angelo; Enzo Kobs; Yara Insaurralde; Rayane Leticia; Pedro Joaquim; Jennifer Araujo.

Crédito do site: by Miguel. Ícone da aba: símbolo de química do site.

## Conferência com o PDF

Os três temas, os exemplos de pH, os simuladores, as ilustrações, as quatro questões comentadas e as referências bibliográficas estão presentes. Os dois vídeos autorais ainda precisam ser incorporados. O grupo também deve preparar a capa do relatório com todos os integrantes, informar a responsabilidade de cada aluno e enviar o link no Moodle e no grupo indicado no PDF até 01/12/2026.
