---
title: Alterando a escala das imagens de background
slug: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
translation_of_original: Web/CSS/CSS_Background_and_Borders/Scaling_background_images
original_slug: Web/Guide/CSS/Scaling_background_images
---
<p>A propriedade CSS {{ cssxref("background-size") }} possibilita o ajuste das imagens do background, ao invés do comportamento padrão do navegador de mostrar a imagem no seu tamanho real. Você pode tanto aumentar como diminuir a imagem.</p>

<h2 id="Tiling_a_large_image" name="Tiling_a_large_image">Duplicando uma imagem grande</h2>

<p>Vamos considerar uma imagem grande, a image da logo do Firefox com 2982x2808 . Nós queremos (por alguma razão, envolvendo um site com um design ruim) quatro cópia desta imagem em um quadrado de 300x300 pixel, resultando nesse visual:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8965/ss1.png"></p>

<p>Isto pode ser conseguido usando o seguinte CSS:</p>

<pre class="brush: css;  highlight:[8]">.square {
  width: 300px;
  height: 300px;
  background-image: url(firefox_logo.png);
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
  background-size: 150px;
}
</pre>

<p>O {{ cssxref("background-size") }} não precisa mais de nenhum prefixo, mas você pode considerar a adição de uma versão pré-fixada se você está focando em browsers muito antigos.</p>

<h2 id="Stretching_an_image" name="Stretching_an_image">Esticando uma imagem</h2>

<p>Você também pode especificar ambos os tamanhos, horizontal e vertical da imagem, assim:</p>

<pre class="brush:css">background-size: 300px 150px;
</pre>

<p>O resultado fica assim:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8967/ss2.png"></p>

<h2 id="Scaling_an_image_up" name="Scaling_an_image_up">Aumentando escala de uma imagem</h2>

<p>Na outra extremidade do espectro, é possível dimensionar-se uma imagem no fundo. Aqui nós aumentamos a escala de um favicon de pixel 32x32 para 300x300 pixels:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/8969/ss3.png"></p>

<pre class="brush: css; highlight:[5]">.square2 {
  width: 300px;
  height: 300px;
  background-image: url(favicon.png);
  background-size: 300px;
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
</pre>

<p>Como você pode ver, o CSS é, na verdade, essencialmente idêntico, salvo o nome do arquivo de imagem.</p>

<h2 id="Special_values.3A_.22contain.22_and_.22cover.22" name="Special_values.3A_.22contain.22_and_.22cover.22">Valores especiais: "contain" e "cover"</h2>

<p>Da mesma maneira que o {{cssxref("&lt;length&gt;")}}, a propriedade CSS de {{ cssxref("background-size") }} oferece dois valores de tamanho especial, contain e cover. Vamos dar uma olhada nestes.</p>

<h3 id="contain" name="contain"><code>contain</code></h3>

<p>O valor contain especifica que, independentemente do tamanho da caixa que contém, a imagem de fundo deve ser dimensionado de modo a que cada lado seja tão grande quanto possível ao mesmo tempo que não exceda o comprimento do lado correspondente do recipiente. Tente redimensionar a janela usando um navegador que suporta imagens de fundo de escala (como o Firefox 3.6 ou posterior) para ver isso em ação no exemplo vivo abaixo.</p>

<figure>
<p>{{ EmbedLiveSample("contain", "100%", "220") }}</p>
</figure>

<pre class="brush:html">&lt;div class="bgSizeContain"&gt;
  &lt;p&gt;Tente redimensionar a janela e ver o que acontece.&lt;/p&gt;
&lt;/div&gt;</pre>

<pre class="brush:css">.bgSizeContain {
  height: 200px;
  background-image: url(https://mdn.mozillademos.org/files/8971/firefox_logo.png);
  background-size: contain;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
}</pre>

<h3 id="cover" name="cover"><code>cover</code></h3>

<p>O valor cover especifica que a imagem de fundo deve ser dimensionado de modo que seja tão pequena quanto possível ao mesmo tempo assegurar que ambas as dimensões são maiores do que ou igual à dimensão correspondente do recipiente.</p>

<figure>{{ EmbedLiveSample("cover", "100%", "220") }}</figure>

<p>Os exemplos à seguir usam HTML &amp; CSS:</p>

<pre class="brush:html">&lt;div class="bgSizeCover"&gt;
  &lt;p&gt;Tente redimensionar a janela e ver o que acontece.&lt;/p&gt;
&lt;/div&gt;</pre>

<pre class="brush:css">.bgSizeCover {
  height: 200px;
  background-image: url('https://mdn.mozillademos.org/files/8971/firefox_logo.png');
  background-size: cover;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
</pre>

<h2 id="See_also" name="See_also">Veja Também</h2>

<ul>
 <li>{{ cssxref("background-size") }}</li>
 <li>{{ cssxref("background") }}</li>
</ul>
