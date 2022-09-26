---
title: Image()
slug: Web/API/HTMLImageElement/Image
translation_of: Web/API/HTMLImageElement/Image
---
<div>{{ APIRef("HTML DOM") }}</div>



<div>Конструктор <strong>Image()</strong> создаёт новый экземпляр HTMLImageElement. Эквивалентно document.createElement ('img').</div>

<h3 id="Конструктор_элемента_Image">Конструктор элемента Image</h3>

<p>Имеет два необязательных параметра: <strong>ширину</strong> и <strong><strong>высоту</strong></strong>: </p>

<pre class="brush: js">Image([unsigned long <strong>width</strong>, unsigned long <strong>height</strong>])</pre>

<h3 id="Пример">Пример</h3>

<h5 id="Исходный_код">Исходный код:</h5>

<pre class="brush: js">var img = new Image(100, 200);
img.src = 'picture.jpg';
console.log(img);</pre>

<h5 id="Результат">Результат:</h5>

<pre class="brush: html">&lt;img width="100" height="200" src="picture.jpg"&gt;</pre>



<div class="note">
<p>Примечание: этот конструктор существует только для истории, и возвращает экземпляр <a href="/en-US/docs/Web/API/HTMLImageElement" style="line-height: 1.572;" title="en/DOM/HTMLImageElement">HTMLImageElement</a> точно также, как и<code> </code><code style="font-size: 14px;">document.createElement('img')</code>.</p>
</div>


