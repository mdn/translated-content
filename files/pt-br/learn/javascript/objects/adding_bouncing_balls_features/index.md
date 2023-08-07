---
title: Adicionando recursos à nossa demonstração de bolas pulantes
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

Nesta avaliação, espera-se que você use a demonstração de bolas saltantes do artigo anterior como ponto de partida e adicione alguns recursos novos e interessantes a ela.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Before attempting this assessment you should have already worked through
        all the articles in this module.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To test comprehension of JavaScript objects and object-oriented
        constructs
      </td>
    </tr>
  </tbody>
</table>

## Ponto de partida

Para iniciar essa avaliação, faça uma cópia local de [index-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), e [main-finished.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) do nosso último artigo em um novo diretório em seu computador local.

> **Nota:** Alternatively, you could use a site like [JSBin](http://jsbin.com/) or [Thimble](https://thimble.mozilla.org/) to do your assessment. You could paste the HTML, CSS and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put them inline `<script>`/`<style>` elements inside the HTML page.

## Resumo do projeto

Nossa demo com bola saltitante é divertida, mas agora queremos torná-la um pouco mais interativa, adicionando um círculo maligno controlado pelo usuário, que vai comer as bolas se elas forem capturadas. Também queremos testar suas habilidades de construção de objetos criando um objeto `Shape()` genérico do qual nossas bolas e círculo maligno podem herdar. Por fim, queremos adicionar um contador de pontuação para rastrear o número de bolas a serem capturadas.

A imagem seguinte dá-lhe uma ideia do que deve ser o programa final:

![](bouncing-evil-circle.png)

Para lhe dar mais uma ideia, dê uma olhada no [exemplo finalizado](http://mdn.github.io/learning-area/javascript/oojs/assessment/) (não espreitar o código-fonte!)

## Passos para concluir

As seções a seguir descrevem o que você precisa fazer.

### Criando nossos novos objetos

Primeiro de tudo, altere seu construtor `Ball()` existente para que ele se torne um construtor `Shape()` e adicione um novo construtor `Ball()`:

1. O construtor `Shape()` deve definir as propriedades `x`, `y`, `velX`, e `velY` da mesma maneira que o construtor `Ball()` fez originalmente, mas não as propriedades de `color` e `size`.
2. Também deve definir uma nova propriedade chamada `exists`, que é usada para rastrear se as bolas existem no programa (não foram comidas pelo círculo do mal). Este deve ser um booleano (`true`/`false`).
3. O construtor `Ball()` deve herdar as propriedades `x`, `y`, `velX`, `velY`, e `exists` do construtor `Shape()`.
4. Ele também deve definir uma propriedade `color` e uma `size`, como fez o construtor `Ball()` original.
5. Lembre-se de definir o `prototype` e o `constructor` do construtor `Ball()` adequadamente.

As definições do método ball `draw()`, `update()`, e `collisionDetect()` devem permanecer exatamente iguais às anteriores.

Você também precisa adicionar um novo parâmetro à nova chamada de construtor `new Ball() ( ... )` — o parâmetro `exists` deve ser o quinto parâmetro, e deve receber um valor `true`.

Neste ponto, tente recarregar o código — ele deve funcionar da mesma forma que antes, com nossos objetos redesenhados.

### Definindo EvilCircle()

Agora é hora de conhecer o cara mau — o `EvilCircle()`! Nosso jogo só envolverá um círculo maligno, mas ainda vamos defini-lo usando um construtor que herda de `Shape()` para lhe dar alguma prática. Você pode querer adicionar outro círculo ao aplicativo mais tarde, que pode ser controlado por outro jogador, ou ter vários círculos malignos controlados por computador. Você provavelmente não vai dominar o mundo com um único círculo maligno, mas fará por essa avaliação.

O construtor `EvilCircle()` deve herdar `x`, `y`, `velX`, `velY`, e `exists` de `Shape()`, mas `velX` e `velY` devem sempre ser iguais a 20.

Você deveria fazer algo como `Shape.call(this, x, y, 20, 20, exists);`

Ele também deve definir suas próprias propriedades, da seguinte maneira:

- `color` — `'white'`
- `size` — `10`

Novamente, lembre-se de definir suas propriedades herdadas como parâmetros no construtor e defina as propriedades `prototype` e `constructor` corretamente.

### Definindo os métodos de EvilCircle()

`EvilCircle()` deve ter quatro métodos, conforme descrito abaixo.

#### `draw()`

Este método tem o mesmo propósito que o método `draw()` de `Ball()`: Ele desenha a instância do objeto na tela. Ele funcionará de maneira muito semelhante, portanto, você pode começar copiando a definição `Ball.prototype.draw`. Você deve então fazer as seguintes alterações:

- Nós queremos que o círculo do mal não seja preenchido, mas apenas tenha uma linha externa (traço). Você pode conseguir isso atualizando [`fillStyle`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/fillStyle) e [`fill()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/fill) para [`strokeStyle`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/strokeStyle) e [`stroke()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/stroke).
- Também queremos tornar o traço um pouco mais espesso, para que você possa ver o círculo maligno com mais facilidade. Isso pode ser obtido definindo um valor para [`lineWidth`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/lineWidth) em algum lugar após a chamada [`beginPath()`](/pt-BR/docs/Web/API/CanvasRenderingContext2D/beginPath) (3 será suficiente).

#### `checkBounds()`

Este método fará a mesma coisa que a primeira parte da função `update()` do `Ball()` — olhe para ver se o círculo do mal vai sair da borda da tela, e pare de fazer isso. Novamente, você pode simplesmente copiar a definição de `Ball.prototype.update`, mas há algumas alterações que você deve fazer:

- Livre-se das duas últimas linhas - não queremos atualizar automaticamente a posição do círculo maligno em todos os quadros, pois estaremos mudando isso de alguma outra forma, como você verá abaixo.
- Dentro das instruções `if()`, se os testes retornam true, não queremos atualizar o `velX`/`velY`; Em vez disso, queremos alterar o valor de `x`/`y` para que o círculo maligno seja devolvido na tela um pouco. Adicionar ou subtrair (conforme apropriado) a propriedade `size` do círculo maligno faria sentido.

#### `setControls()`

Esse método adicionará um ouvinte de evento `onkeydown` ao objeto `window` para que, quando determinadas teclas do teclado forem pressionadas, possamos mover o círculo maligno ao redor. O bloco de código a seguir deve ser colocado dentro da definição do método:

```js
var _this = this;
window.onkeydown = function (e) {
  if (e.keyCode === 65) {
    _this.x -= _this.velX;
  } else if (e.keyCode === 68) {
    _this.x += _this.velX;
  } else if (e.keyCode === 87) {
    _this.y -= _this.velY;
  } else if (e.keyCode === 83) {
    _this.y += _this.velY;
  }
};
```

Assim, quando uma tecla é pressionada, a propriedade [keyCode](/pt-BR/docs/Web/API/KeyboardEvent/keyCode) é consultada para ver qual tecla é pressionada. Se for um dos quatro representados pelos códigos de teclas especificados, o círculo maligno se moverá para a esquerda / direita / para cima / para baixo.

- Para um ponto de bônus, deixe-nos saber a quais chaves os códigos de teclas específicos estão mapeados.
- Para outro ponto de bônus, você pode nos dizer por que precisamos definir `var _this = this;` na posição em que está? É algo a ver com o escopo da função.

#### `collisionDetect()`

Este método irá agir de forma muito semelhante ao método `collisionDetect()` do `Ball()`, então você pode usar uma cópia disso como base deste novo método. Mas há algumas diferenças:

- Na declaração `if` externa, você não precisa mais verificar se a bola atual na iteração é igual à bola que está fazendo a verificação - porque ela não é mais uma bola, é o círculo do mal! Em vez disso, você precisa fazer um teste para ver se a bola que está sendo checada existe (com qual propriedade você poderia fazer isso?). Se não existe, já foi comido pelo círculo do mal, por isso não há necessidade de verificá-lo novamente.
- Na instrução `if` interna, você não quer mais que os objetos mudem de cor quando uma colisão é detectada — em vez disso, você quer definir quaisquer bolas que colidam com o círculo maligno para não existir mais (novamente, como você pensa? d fazer isso?).

### Trazendo o círculo do mal para o programa

Agora nós definimos o círculo do mal, precisamos realmente fazer isso aparecer em nossa cena. Para fazer isso, você precisa fazer algumas alterações na função `loop()`.

- Primeiro de tudo, crie uma nova instância de objeto do círculo do mal (especificando os parâmetros necessários) e, em seguida, chame seu método `setControls()`. Você só precisa fazer essas duas coisas uma vez, não em todas as iterações do loop.
- No ponto em que você percorre todas as bolas e chama as funções `draw()`, `update()`, e `collisionDetect()` para cada uma, faça com que essas funções sejam chamadas apenas se a bola atual existir.
- Chame os métodos `draw()`, `checkBounds()`, e `collisionDetect()` da instância do mal ball em cada iteração do loop.

### Implementando o contador de pontuação

Para implementar o contador de pontuação, siga os seguintes passos:

1. No seu arquivo HTML, adicione um elemento {{HTMLElement("p")}} logo abaixo do elemento {{HTMLElement("h1")}} contendo o texto "Contagem de bolas:".
2. No seu arquivo CSS, adicione a seguinte regra na parte inferior:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. Em seu JavaScript, faça as seguintes atualizações:

   - Crie uma variável que armazene uma referência ao parágrafo.
   - Mantenha uma contagem do número de bolas na tela de alguma forma.
   - Incrementar a contagem e exibir o número atualizado de bolas cada vez que uma bola é adicionada à cena.
   - Decrementar a contagem e exibir o número atualizado de bolas cada vez que o círculo maligno come uma bola (faz com que ele não exista).

## Dicas e sugestões

- Essa avaliação é bastante desafiadora. Tome cada passo devagar e com cuidado.
- Pode ser uma idéia manter uma cópia separada da demo depois que você fizer com que cada estágio funcione, para que você possa consultá-la caso se encontre em apuros mais tarde.

## Avaliação

Se você está seguindo esta avaliação como parte de um curso organizado, você deve poder dar seu trabalho ao seu professor / mentor para marcação. Se você é auto-didata, então você pode obter o guia de marcação com bastante facilidade, perguntando no tópico de [discussão para este exercício](https://discourse.mozilla.org/t/adding-features-to-our-bouncing-balls-demo-assessment/24689), ou no canal de [#mdn](irc://irc.mozilla.org/mdn) IRC da [Mozilla IRC](https://wiki.mozilla.org/IRC). Tente o exercício primeiro — não há nada a ganhar com a trapaça!

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
