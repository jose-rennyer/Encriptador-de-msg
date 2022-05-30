# Encriptador-de-msg

<div>
  <img src="https://user-images.githubusercontent.com/93714892/171004223-c3f37f4c-e865-46af-b5c0-6402c84da4dc.png" alt="projeto Desencriptador"/>
</div>

<p>Esse projeto foi um desafio para mim, eu nunca pensei em fazer isso em toda a minha vida, porém o resultado foi sucesso afinal nunca desistir, todo mundo um dia chega na vitória
</p>

<p>Para esse projeto eu usei</p>
<ul>
  <li>Html</li>
  <li>Css</li>
  <li>Javascript</li>
</ul>

<h3>Área de mensagem</h3>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/171004779-b7868ca7-e0c3-4af3-95dd-2d8309b694c5.png" alt="area de mensagem com opção de encript ou desencript"/>
</div>

<p>Para essa lógica de mensagem, eu usei alguns eventos direcionados para esses dois botões, sendo eles as funções de encriptar e desencriptar.
<br>
A desencriptação é feita a partir de loops e includes, sendo feita a substituição de cada palavra do tipo, a partir de retornos true, na hora da verificação, para saber
  se tal caractere, ou palavra está contida na string recebida como condição.
</p>

<h3>Botões desencriptar e encriptar</h3>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/171005399-042cab3b-fbf6-40ef-bcbe-8849e432f219.png" alt="botões da desencriptação e encriptação"/>
</div>

<p>Para a encriptação é usado o primeiro método de verificar tal palavra e trocar por outra já pre-definida.
<br>Para a desencriptação é usada a lógica reversa encontrada dentro da lógica de encriptação.
<br>Nestes botões os principais usos foram:</p>

<ul>
  <li>addEventListener</li>
  <li>Loops</li>
  <li>includes</li>
  <li>replaceAll</li>
  <li>Arrays</li>
</ul>

<h3>Área de resposta encriptada/desencriptada</h3>

<div>
  <img src="https://user-images.githubusercontent.com/93714892/171006090-ca7b15b9-81fa-41f4-8390-6aa430134dab.png" alt="area de resposta de desencriptação"/>
</div>

<p>Nesta área as unicas lógicas utilizadas, foram bem pequenas, como remoção de fundo, adição de funcionalidades, e entre outros, a lógica mais vista na verdade
e a que me gerou um pouco mais de desafio, foi o botão de copiar, e é sobre ele que vou explicar agora.</p>

<h3>Botão de copiar</h3>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/171006590-f62e93c9-748c-44ae-9de8-f62204bae20c.png" alt="botao de copiar"/>
</div>

<p>Nesta área foi bem desafiadora, porque eu não tinha a menor ideia de como com apenas um botão, fazer com que o programa copie e armazene o valor copiado dentro
da área esperada do "crtl + v" o famoso (colar). Eu não tinha a menor ideia, então eu fiz uma gambiarra inicialmente. Orientada a eventos, começando por.<br>

 Adicionar um evento de clique ao botão para copiar o texto que está na área de resposta e armazenar em uma variavel, e logo em seguida eu adicionei um evento de "keydown"
  dentro da área onde você descreve a mensagem.<br>
  O evento se tratava de quando o usuario apertar ctrl + o keyCode 86 que é a palavra "v", ele automaticamente colaria a variavel copiada, dentro do input. mas isso
  veio apresentando varios bugs com o decorrer do tempo, e não ficou viavel no fim das contas. então tive que estudar mais e conseguir encontrar uma solução meio
  temporaria com o "document.execCommand()", que está meio decrepta de acordo com a própria documentação, mas vou usa-la por enquanto, que não aprendo outra coisa.
</p>

<p>Principais usos de códigos nessa área de resposta</p>
<ul>
  <li>document.execCommand()</li>
  <li>select()</li>
  <li>addEventListener</li>
  <li>classList</li>
  <li>Manipulação de valores</li>
</ul>


<h3>Responsividade para tablet</h3>

<div>
  <img src="https://user-images.githubusercontent.com/93714892/171008398-532394c7-e87e-4107-8208-0738e70338e1.png" alt="area de mensagem tablet"/>
</div>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/171008533-def792f6-c4c5-40ac-87f0-890fe0268a28.png" alt="area de resposta tablet"/>
</div>



<h3>Responsividade para mobile</h3>
<div>
  <img src="https://user-images.githubusercontent.com/93714892/171008632-f44337bf-1f23-46a8-8ab7-78d635ae1492.png" alt="area de mensagem mobile"/>
</div>

<div>
  <img src="https://user-images.githubusercontent.com/93714892/171008745-7c8e9426-143c-4d52-89d3-1063d80d4483.png" alt="area de resposta mobile"/>
</div>


















