---
title: Detecção de Colisão 2D
slug: Games/Techniques/2D_collision_detection
translation_of: Games/Techniques/2D_collision_detection
---
<div>{{GamesSidebar}}</div>

<p>{{IncludeSubnav("/en-US/docs/Games")}}</p>

<div class="summary">
<p>Algoritmos para detectar colisões em jogos 2D dependem do tipo de formas que podem colidir (por exemplo, retângulo para retângulo, retângulo para círculo, círculo para círculo). Geralmente, você terá uma forma genérica simples que abrange a entidade conhecida como "hitbox", portanto, mesmo que a colisão não seja perfeita, ela terá boa aparência e terá bom desempenho em várias entidades. Este artigo fornece uma revisão das técnicas mais comuns usadas para fornecer detecção de colisão em jogos 2D.</p>
</div>

<h2 id="Caixa_delimitadora_alinhada_por_eixo">Caixa delimitadora alinhada por eixo</h2>

<p>Uma das formas mais simples de detecção de colisão é entre dois retângulos alinhados no eixo — ou seja, sem rotação. O algoritmo funciona garantindo que não haja nenhum espaço entre os 4 lados dos retângulos. Qualquer lacuna significa que uma colisão não existe.</p>

<pre class="brush: js notranslate">var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x &lt; rect2.x + rect2.width &amp;&amp;
   rect1.x + rect1.width &gt; rect2.x &amp;&amp;
   rect1.y &lt; rect2.y + rect2.height &amp;&amp;
   rect1.y + rect1.height &gt; rect2.y) {
    // collision detected!
}

// filling in the values =&gt;

if (5 &lt; 30 &amp;&amp;
    55 &gt; 20 &amp;&amp;
    5 &lt; 20 &amp;&amp;
    55 &gt; 10) {
    // collision detected!
}
</pre>

<div class="hidden">
<h5 id="Rect_code">Rect code</h5>

<pre class="brush: html notranslate">&lt;div id="cr-stage"&gt;&lt;/div&gt;
&lt;p&gt;Mova o retângulo com as setas do teclado. Verde significa colisão, azul significa não-colisão.&lt;/p&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"&gt;&lt;/script&gt;
</pre>

<pre class="brush: js notranslate">Crafty.init(200, 200);

var dim1 = {x: 5, y: 5, w: 50, h: 50}
var dim2 = {x: 20, y: 10, w: 60, h: 40}

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");

rect2.bind("EnterFrame", function () {
    if (rect1.x &lt; rect2.x + rect2.w &amp;&amp;
        rect1.x + rect1.w &gt; rect2.x &amp;&amp;
        rect1.y &lt; rect2.y + rect2.h &amp;&amp;
        rect1.h + rect1.y &gt; rect2.y) {
        // collision detected!
        this.color("green");
    } else {
        // no collision
        this.color("blue");
    }
});

</pre>
</div>

<p>{{ EmbedLiveSample('Rect_code', '700', '300', '', 'Games/Techniques/2D_collision_detection') }}</p>

<div class="note">
<p><strong>Nota</strong>: <a href="https://jsfiddle.net/jlr7245/217jrozd/3/">Outro exemplo sem o Canvas ou bibliotecas externas.</a></p>
</div>

<h2 id="Colisão_Circular">Colisão Circular</h2>

<p>Outra forma simples para detecção de colisão é entre dois círculos. Esse algoritmo funciona tomando os pontos centrais dos dois círculos e garantindo que a distância entre os pontos centrais seja menor que os dois raios somados.</p>

<div class="hidden">
<h6 id="Playable_code">Playable code</h6>

<pre class="brush: html notranslate">&lt;div id="cr-stage"&gt;&lt;/div&gt;
&lt;p&gt;Move the circle with arrow keys. Green means collision, blue means no collision.&lt;/p&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"&gt;&lt;/script&gt;
</pre>

<pre class="brush: css notranslate">#cr-stage {
    position: static !important;
    height: 200px !important;
}
</pre>

<pre class="brush: js notranslate">Crafty.init(200, 200);

var dim1 = {x: 5, y: 5}
var dim2 = {x: 20, y: 20}

Crafty.c("Circle", {
   circle: function(radius, color) {
        this.radius = radius;
        this.w = this.h = radius * 2;
        this.color = color || "#000000";

        this.bind("Move", Crafty.DrawManager.drawAll)
        return this;
   },

   draw: function() {
       var ctx = Crafty.canvas.context;
       ctx.save();
       ctx.fillStyle = this.color;
       ctx.beginPath();
       ctx.arc(
           this.x + this.radius,
           this.y + this.radius,
           this.radius,
           0,
           Math.PI * 2
       );
       ctx.closePath();
       ctx.fill();
       ctx.restore();
    }
});

var circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

var circle2 = Crafty.e("2D, Canvas, Circle, Fourway").fourway(2).attr(dim2).circle(20, "blue");

circle2.bind("EnterFrame", function () {
    var dx = (circle1.x + circle1.radius) - (circle2.x + circle2.radius);
    var dy = (circle1.y + circle1.radius) - (circle2.y + circle2.radius);
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance &lt; circle1.radius + circle2.radius) {
        // collision detected!
        this.color = "green";
    } else {
        // no collision
        this.color = "blue";
    }
});


</pre>
</div>

<pre class="brush: js notranslate"><code>var circle1 = {radius: 20, x: 5, y: 5};
var circle2 = {radius: 12, x: 10, y: 5};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance &lt; circle1.radius + circle2.radius) {
    // collision detected!
}</code>
</pre>

<p>{{ EmbedLiveSample('Playable_code', '700', '300', '', 'Games/Techniques/2D_collision_detection') }}</p>

<div class="note">
<p><strong>Nota</strong>:  <a href="https://jsfiddle.net/jlr7245/teb4znk0/20/" rel="noopener"><font><font>Aqui é outro exemplo sem o Canvas ou bibliotecas externas.</font></font></a></p>
</div>

<h2 id="Teorema_do_eixo_de_separação">Teorema do eixo de separação</h2>

<p>Este é um algoritmo de colisão que pode detectar uma colisão entre quaisquer dois polígonos *convexos*. É mais complicado implementar do que os métodos acima, mas é mais poderoso. A complexidade de um algoritmo como esse significa que precisaremos considerar a otimização de desempenho, abordada na próxima seção.</p>

<p>A implementação do SAT está fora do escopo desta página, portanto, veja os tutoriais recomendados abaixo:</p>

<ol>
 <li><a href="http://www.sevenson.com.au/actionscript/sat/">Separating Axis Theorem (SAT) explanation</a></li>
 <li><a href="http://www.metanetsoftware.com/technique/tutorialA.html">Collision detection and response</a></li>
 <li><a href="http://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169">Collision detection Using the Separating Axis Theorem</a></li>
 <li><a href="http://www.codezealot.org/archives/55">SAT (Separating Axis Theorem)</a></li>
 <li><a href="http://rocketmandevelopment.com/blog/separation-of-axis-theorem-for-collision-detection/">Separation of Axis Theorem (SAT) for Collision DDetection</a></li>
</ol>

<h2 id="Performance_de_Colisão">Performance de Colisão</h2>

<p>Embora alguns desses algoritmos para detecção de colisão sejam simples o suficiente para serem calculados, pode ser um desperdício de ciclos testar todas as entidades com todas as outras entidades. Normalmente os jogos dividem a colisão em duas fases, ampla e estreita.</p>

<h3 id="Fase_Larga">Fase Larga</h3>

<p>A fase ampla deve fornecer uma lista de entidades que *podem* estar colidindo. Isso pode ser implementado com uma estrutura de dados espacial que lhe dará uma ideia aproximada de onde a entidade existe e o que existe em torno dela. Alguns exemplos de estruturas de dados espaciais são Quad Trees, R-Trees ou um Spash Hashmap.</p>

<h3 id="Fase_estreita">Fase estreita</h3>

<p>Quando você tem uma pequena lista de entidades para verificar, você vai querer usar um algoritmo de fase estreita (como os listados acima) para fornecer uma resposta certa sobre se há uma colisão ou não.</p>
