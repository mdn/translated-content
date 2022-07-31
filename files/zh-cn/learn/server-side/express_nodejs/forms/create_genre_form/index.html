---
title: 创建种类表单
slug: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
translation_of: Learn/Server-side/Express_Nodejs/forms/Create_genre_form
---
<p>本章节演示如何定义我们的页面，创建<code>Genre</code> 物件（这是一个很好的起点，因为类型只有一个字段，它的名称<code>name</code>，没有依赖项）。像任何其他页面一样，我们需要设置路由，控制器和视图。</p>

<h2 id="引入验证与无害化方法">引入验证与无害化方法</h2>

<p>在我们的控制器中使用 <em>express-validator</em> 验证器，我們必須导入我们想要从 <strong>'express-validator/check</strong>' 和 <strong>'express-validator/filter</strong>' 模块中使用的函数。</p>

<p>打开<strong>/controllers/genreController.js</strong>，并在文件顶部添加以下行：</p>

<pre class="brush: js">const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');</pre>

<h2 id="控制器—get路由">控制器—get 路由</h2>

<p>找到导出的<code>genre_create_get()</code> 控制器方法，并将其替换为以下代码。这只是渲染<strong>genre_form.pug</strong>视图，传递一个 title 变量。</p>

<pre class="brush: js">// Display Genre create form on GET.
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};</pre>

<h2 id="控制器—post_路由">控制器—post 路由</h2>

<p>找到导出的<code>genre_create_post()</code>控制器方法，并将其替换为以下代码。</p>

<pre class="brush: js">// Handle Genre create on POST.
exports.genre_create_post =  [

    // Validate that the name field is not empty.
    body('name', 'Genre name required').isLength({ min: 1 }).trim(),

    // Sanitize (trim and escape) the name field.
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) =&gt; {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data.
        var genre = new Genre(
          { name: req.body.name }
        );


        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
        return;
        }
        else {
            // Data from form is valid.
            // Check if Genre with same name already exists.
            Genre.findOne({ 'name': req.body.name })
                .exec( function(err, found_genre) {
                     if (err) { return next(err); }

                     if (found_genre) {
                         // Genre exists, redirect to its detail page.
                         res.redirect(found_genre.url);
                     }
                     else {

                         genre.save(function (err) {
                           if (err) { return next(err); }
                           // Genre saved. Redirect to genre detail page.
                           res.redirect(genre.url);
                         });

                     }

                 });
        }
    }
];</pre>

<p>首先要注意的是，控制器不是单个中间件函数（带参数（<code>req, res, next</code>）），而是指定一组中间件函数。数组传递给路由器函数，并按顺序调用每个方法。</p>

<div class="note">
<p><strong>备注：</strong> 这种方法是必需的，因为消毒/验证器是中间件功能。</p>
</div>

<p>数组中的第一个方法定义了一个验证器（<code>body</code>），来检查 name 字段是否为空（在执行验证之前调用<code>trim()</code>，以删除任何尾随/前导空格）。</p>

<p>数组中的第二个方法（<code>sanitizeBody()</code>），创建一个清理程序来调用<code>trim()</code>修剪名称字段和调用<code>escape()</code>转义任何危险的 HTML 字符。</p>

<pre class="brush: js">// Validate that the name field is not empty.
body('name', 'Genre name required').isLength({ min: 1 }).trim(),

// Sanitize (trim and escape) the name field.
sanitizeBody('name').trim().escape(),</pre>

<div class="note">
<p><strong>备注：</strong> 验证期间运行的清洁器不会修改请求。这就是为什么我们必须在上面的两个步骤中调用<code>trim()</code>！</p>
</div>

<p>在指定验证器和清理器之后，我们创建了一个中间件函数，来提取任何验证错误。我们使用<code>isEmpty()</code> 来检查验证结果中，是否有任何错误。如果有，那么我们再次渲染表单，传入我们的已清理种类对象和错误消息的数组（<code>errors.array()</code>）。</p>

<pre class="brush: js">// Process request after validation and sanitization.
(req, res, next) =&gt; {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var genre = new Genre(
      { name: req.body.name }
    );

    if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
    return;
    }
    else {
        // Data from form is valid.
        ... &lt;save the result&gt; ...
    }
}</pre>

<p>如果种类名称数据有效，那么我们检查，是否已存在具有相同名称的种类<code>Genre</code>（因为我们不想创建重复项）。</p>

<p>如果是，我们会重定向到现有种类的详细信息页面。如果没有，我们保存新种类，并重定向到其详细信息页面。</p>

<pre class="brush: js">// Check if Genre with same name already exists.
Genre.findOne({ 'name': req.body.name })
    .exec( function(err, found_genre) {
    if (err) { return next(err); }
        if (found_genre) {
            // Genre exists, redirect to its detail page.
            res.redirect(found_genre.url);
            }
        else {
            genre.save(function (err) {
                if (err) { return next(err); }
                    // Genre saved. Redirect to genre detail page.
                    res.redirect(genre.url);
                });
        }
});</pre>

<p>在我们所有的 <code>POST</code>控制器中，都使用了相同的模式：我们运行验证器，然后运行消毒器，然后检查错误，并使用错误信息重新呈现表单，或保存数据。</p>

<h2 id="视图">视图</h2>

<p>当我们创建一个新的种类<code>Genre</code>时，在<code>GET</code>和<code>POST</code>控制器/路由中，都会呈现相同的视图（稍后在我们更新种类<code>Genre</code>时也会使用它）。</p>

<p>在<code>GET</code>情况下，表单为空，我们只传递一个 title 变量。在<code>POST</code>情况下，用户先前输入了无效数据 - 在种类变量<code>genre</code>中，我们传回了输入数据的已清理版本，并且在<code>errors</code>变量中，我们传回了一组错误消息。</p>

<pre class="brush: js">res.render('genre_form', { title: 'Create Genre'});
res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});</pre>

<p>创建 <strong>/views/genre_form.pug</strong>，并复制下面的文本。</p>

<pre class="brush: plain">extends layout

block content
  h1 #{title}

  form(method='POST' action='')
    div.form-group
      label(for='name') Genre:
      input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name))
    button.btn.btn-primary(type='submit') Submit

  if errors
    ul
      for error in errors
        li!= error.msg</pre>

<p>从我们之前的教程中，可以很好地理解这个模板的大部分内容。首先，我们扩展 <strong>layout.pug</strong>基本模板，并覆盖名为“<strong>content</strong>”的块<code>block</code>。然后我们有一个标题，我们从控制器传入的标题<code>title</code>（通过<code>render()</code> 方法）。</p>

<p>接下来，我们有 HTML 表单的 Pug 代码，它使用<code>POST</code>方法将数据发送到服务器，并且因为操作<code>action</code>是空字符串，所以将数据发送到与页面相同的 URL。</p>

<p>表单定义了一个名为“name”的“text”类型的必填字段。字段的默认值，取决于是否定义了种类变量<code>genre</code>。如果从<code>GET</code>路由调用，它将为空，因为这是一个新表单。如果从<code>POST</code>路由调用，它将包含用户最初输入的（无效）值。</p>

<p>页面的最后一部分是错误代码。如果已定义错误变量，则只会打印错误列表（换句话说，当模板在<code>GET</code>路由上呈现时，此部分不会出现）。</p>

<div class="note">
<p><strong>备注：</strong> 这只是呈现错误的一种方法。您还可以从错误变量中，获取受影响字段的名称，并使用这些，来控制错误消息的呈现位置，以及是否应用自定义 CSS 等。</p>
</div>

<h2 id="它看起來像是">它看起來像是？</h2>

<p>运行应用程序，打开浏览器到<a href="http://localhost:3000/">http://localhost:3000/</a>，然后选择 Create new genre 链接。如果一切设置正确，您的网站应该类似于以下屏幕截图。输入值后，应保存该值，您将进入种类详细信息页面。</p>

<p><img alt="Genre Create Page - Express Local Library site" src="locallibary_express_genre_create_empty.png"></p>

<p>我们针对服务器端，验证的唯一错误是种类字段不能为空。下面的屏幕截图，显示了如果您没有提供种类（以红色突出显示），错误列表会是什么样子。</p>

<p><img src="locallibary_express_genre_create_error.png"></p>

<div class="note">
<p><strong>备注：</strong> 我们的验证使用<code>trim()</code>，来确保不接受空格作为种类名称。我们还可以在表单中​​的字段定义中，添加值<code>required='true'</code>，来验证客户端字段不为空：</p>

<pre class="brush: js"><code>input#name.form-control(type='text', placeholder='Fantasy, Poetry etc.' name='name' value=(undefined===genre ? '' : genre.name), <strong>required='true'</strong> )</code></pre>
</div>

<h2 id="下一步">下一步</h2>

<ul>
 <li>回到 <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms">Express 教程 6: 使用表单</a></li>
 <li>继续教程 6 下一个部分：<a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Create_author_form">创建作者表单</a></li>
</ul>
