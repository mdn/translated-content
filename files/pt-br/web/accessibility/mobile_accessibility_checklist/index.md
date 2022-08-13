---
title: Acessibilidade para plataforma móvel
slug: Web/Accessibility/Mobile_accessibility_checklist
tags:
  - Acessibilidade
  - Firefox OS
  - Guías
  - Móveis
translation_of: Web/Accessibility/Mobile_accessibility_checklist
original_slug: Web/Acessibilidade/Accessibilidade_para_plataforma_movel
---
<div class="summary">
<p><span class="seoSummary">Este documento contém uma lista concisa de requisitos para desenvolvedores de aplicativos móveis. Tem como intenção evoluir continuamente conforme forem aparecendo outros padrões.</span></p>
</div>

<h2 id="Cor">Cor</h2>

<ul>
 <li>O constrate de cor <strong>DEVE</strong> seguir os requirementos level AA do <a href="http://www.w3.org/TR/WCAG/">WCAG 2.0</a>:

  <ul>
   <li>Razão de contraste de 4.5:1 para textos normais (com menos de 18 pontos e 14 pontos em negrito.)</li>
   <li>Razão de contraste de  3:1 para textos grandes (com pelo menos 18 pontos ou 14 pontos em negrito.)</li>
  </ul>
 </li>
 <li>A informação transportada via cor <strong>DEVE</strong> ser também possível através de outros meios (textos sublinhados para links, etc.)</li>
</ul>

<div class="note">
<p>   Jon Snook escreveu um útil <a href="http://snook.ca/technical/colour_contrast/colour.html">Colour Contrast Checker</a>  que é usado para checar o contraste de cores entre o <em>background</em> e o <em>foreground</em>. De maneira alternativa o <a href="http://contrast-finder.tanaguru.com/">Tanaguru Contrast-Finder</a> faz um trabalho similar, mas também sugeste melhores contrastes de cores considerando as usadas.</p>
</div>

<h2 id="Visibilidade">Visibilidade</h2>

<ul>
 <li>Técnicas de esconder conteúdo como zero opacidade, ordem z-index e off-screen placement <strong>NÃO DEVEM </strong>ser exclusivas para visibilidade de manuseio.</li>
 <li>Tudo que não é visível na tela <strong>DEVE</strong> ser verdadeiramente invisível (especialme relevante para apps de páginas únicas com múltiplos <em>cards</em>):
  <ul>
   <li><strong>USE</strong> o atributo <code>hidden</code> ou propriedades de estilo <code>visibility</code> ou <code>display.</code></li>
   <li>A não ser que seja extemamente inevitável, <strong>NÃO USE</strong> o atributo <code>aria-hidden.</code></li>
  </ul>
 </li>
</ul>

<h2 id="Foco">Foco</h2>

<ul>
 <li>Todos os elementos em foco <strong>DEVEM</strong>:

  <ul>
   <li>Estar no padrão como os links, botões, e campo de formulário que são focalizados por padrão.</li>
   <li>Controles não padrões <strong>DEVEM ter </strong>um <a href="http://www.w3.org/TR/wai-aria/roles">ARIA Role</a> apropriado para eles, como em <code>button</code>, <code>link</code>, ou <code>checkbox</code>.</li>
  </ul>
 </li>
 <li>O Foco deve ser utilizado com uma ordem lógica e consistente.</li>
</ul>

<h2 id="Textos_Equivalentes">Textos Equivalentes</h2>

<ul>
 <li>Textos equivalentes <strong>DEVEM</strong> ser declarados para cada elemento dentro do aplicativo que não sejam textos e aos elementos que não são estritamente presentacionais.

  <ul>
   <li>Use <em>alt</em> e <em>title</em> quando apropriado (<em>veja</em> a postagem de Steve Faulkner <a href="http://blog.paciellogroup.com/2013/01/using-the-html-title-attribute-updated/">Using the HTML title attribute</a> para uma boa referência.)</li>
   <li>Se os atributos acima não forem aplicáveis, use os <a href="http://www.w3.org/WAI/PF/aria/states_and_properties#global_states_header">ARIA Properties</a> apropriados, como <code>aria-label</code>, <code>aria-labelledby</code>, ou <code>aria-describedby</code>.</li>
  </ul>
 </li>
 <li>Imagens de textos <strong>DEVEM </strong>ser evitadas.</li>
 <li>Todos controles de formulários <strong>DEVEM</strong> ter etiquetas ({{ htmlelement("label") }} elements) para melhor benefício dos leitores da tela.</li>
</ul>

<h2 id="Manipulação_de_Estado">Manipulação de Estado</h2>

<ul>
 <li>Controles padrão como botões de rádio e checkboxes são manipuláveis pelo sistema operacional. No entanto, para uso customizado pode-se modificar esses estados via <a href="http://www.w3.org/TR/wai-aria/states_and_properties#attrs_widgets_header">ARIA States</a> como os <code>aria-checked</code>, <code>aria-disabled</code>, <code>aria-selected</code>, <code>aria-expanded</code>, e <code>aria-pressed</code>.</li>
</ul>

<h2 id="Orientações_gerais">Orientações gerais</h2>

<ul>
 <li>O título do aplicativo <strong>DEVE</strong> ser fornecido.</li>
 <li>Cabeçalhos <strong>NÃO DEVEM</strong> ter sua hierarquia quebrada:
  <pre class="brush: html">&lt;h1&gt;Heading primeiro nível&lt;/h1&gt;
  &lt;h2&gt;Heading segundo nível&lt;/h2&gt;
  &lt;h2&gt;Outro Heading segundo nível&lt;/h2&gt;
    &lt;h3&gt;Heading terceiro nível&lt;/h3&gt;</pre>
 </li>
 <li><a href="http://www.w3.org/TR/wai-aria/roles#landmark_roles_header">ARIA Landmark Roles</a> <strong>DEVE </strong>ser usado para descrever o aplicativo ou a estrutura do documento, como: <code>banner</code><font face="Consolas, Liberation Mono, Courier, monospace">,</font> <code>complementary</code>, <code>contentinfo</code>, <code>main</code>, <code>navigation</code>, <code>search</code>.</li>
 <li>Eventos de toque só <strong>DEVEM</strong> ser ativados no evento <code>touchend</code>.</li>
 <li>Alvos tocáveis <strong>DEVEM </strong>ser largos o suficiente para o usuário interagir (veja o  <a href="http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/design/touch-target-size">BBC Mobile Accessibility Guidelines</a> para ver as <em>guidelines</em> sobre tamanhos de alvos tocáveis .)</li>
</ul>

<div class="note">
<p><a href="http://www.tanaguru.com/">Tanaguru's automated accessibility testing service</a> fornece uma maneira útil para descobrir alguns erros de acessibilidade que ocorrem em páginas web, ou instalando aplicativos web (ex: Firefox OS.) Você pode encontrar mais sobre a técnica de implementação do Tanaguru, como também contribuir para o projeto <a href="http://tanaguru.org/">tanaguru.org</a>.</p>
</div>

<div class="note">
<p><a href="http://yzen.github.io/2014/04/30/mobile-accessibility-checklist.html">A versão original desse documento</a> foi escrita por <a href="http://yzen.github.io/">Yura Zenevich</a>.</p>
</div>

<p> </p>
