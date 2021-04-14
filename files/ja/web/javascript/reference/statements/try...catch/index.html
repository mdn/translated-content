---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
tags:
  - Exception
  - JavaScript
  - Language feature
  - Statement
translation_of: Web/JavaScript/Reference/Statements/try...catch
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>try...catch</code></strong> 文は、試す文のブロックをマークし、例外が発生したときの応答を指定します。</p>

<div>{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a>https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">try {
  <em>try_statements</em>
}
[catch [(<em>exception_var</em>)] {
  <em>catch_statements</em>
}]
[finally {
  <em>finally_statements</em>
}]
</pre>

<dl>
 <dt><code><em>try_statements</em></code></dt>
 <dd>実行される文です。</dd>

 <dt><code><em>catch_statements</em></code></dt>
 <dd><code>try</code> ブロックの中で例外が発生した場合に実行される文です。</dd>

 <dt><code><em>exception_var</em></code></dt>
 <dd>関連する <code>catch</code> 節に対して例外オブジェクトを保持する識別子です。</dd>

 <dt><code><em>finally_statements</em></code></dt>
 <dd><code>try</code> 文が完了した後に実行される文です。これらの文は、例外が発生されたり捕捉されたりしたかどうかに関係なく実行されます。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>try</code> 文は、1 つ以上の文を含む <code>try</code> ブロックにより構成されます。文が 1 つであっても、常に <code>{}</code> を使用する必要があります。1 つ以上の <code>catch</code> ブロック、または <code>finally</code> ブロックが存在する必要があります。すなわち、<code>try</code> 文には 3 つの形態があります。</p>

<ul>
 <li><code>try...catch</code></li>
 <li><code>try...finally</code></li>
 <li><code>try...catch...finally</code></li>
</ul>

<p><code>catch</code> ブロックは、例外が <code>try</code> ブロックの中で発生した場合に何をするかを指定する文を含みます。<code>try</code> ブロック内 (または <code>try</code> ブロック内から呼び出された関数の中) のいずれかの文で例外が発生した場合は、制御は即座に <code>catch</code> ブロックへ移ります。<code>try</code> ブロックの中で例外が発生しなかった場合は、<code>catch</code> ブロックは飛ばされます。</p>

<p><code>finally</code> ブロックは、<code>try</code> ブロックおよび <code>catch</code> ブロックの実行が完了した後で実行されます。これは常に実行され、例外が発生したかどうか、捕捉されたかどうかには関係ありません。</p>

<p>1 つ以上の <code>try</code> 文を入れ子にする事ができます。内側の <code>try</code> 文が <code>catch</code> ブロックを持っていない場合、それを囲んでいる <code>try</code> 文の <code>catch</code> ブロックに入ります。</p>

<p><code>try</code> を使用して JavaScript の例外を処理することもできます。JavaScript の例外に関する情報は <a href="/ja/docs/Web/JavaScript/Guide">JavaScript ガイド</a>を参照してください。</p>

<h3 id="Unconditional_catch-block" name="Unconditional_catch-block">無条件の catch ブロック</h3>

<p><code>catch</code> ブロックが使われている場合、<code>try</code> ブロックの中から任意の例外が発生すると、<code>catch</code> ブロックが実行されます。例えば、以下のコードで例外が発生すると、制御は <code>catch</code> ブロックへ移動します。</p>

<pre class="brush: js notranslate">try {
  throw 'myException'; // 例外を生成
}
catch (e) {
  // 任意の例外を操作するための文
  logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡します
}
</pre>

<p><code>catch</code> ブロックは例外の値を保持する識別子 (上記の例では <code>e</code>) を指定します。この値は <code>catch</code> ブロックの{{Glossary("Scope", "スコープ")}}内でのみ利用できます。</p>

<h3 id="Conditional_catch_clauses" name="Conditional_catch_clauses">条件付き catch ブロック</h3>

<p>「条件付き <code>catch</code> ブロック」は、下記のように <code>try...catch</code> ブロックを <code>if...else if...else</code> 構造と組み合わせることで作成することができます。</p>

<pre class="brush: js notranslate">try {
  myroutine(); // 3 つの例外を投げる可能性があります
} catch (e) {
  if (e instanceof TypeError) {
    // TypeError 例外を処理するための文
  } else if (e instanceof RangeError) {
    // RangeError 例外を処理するための文
  } else if (e instanceof EvalError) {
    // EvalError 例外を処理するための文
  } else {
    // 任意の指定されていない例外を操作するための文
    logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡す
  }
}
</pre>

<p>よくある使用例としては、次のように想定済みの一部のエラーのみを捕捉 (および無視) し、それ以外の場合はエラーを送出し直す場合です。</p>

<pre class="brush: js notranslate">try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // 頻発する想定済みのエラーを処理する文
  } else {
    throw e;  // エラーを変更しないまま送出し直す
  }
}
</pre>

<h3 id="The_exception_identifier" name="The_exception_identifier">例外識別子</h3>

<p>例外が <code>try</code> ブロックの中で投げられたときは、<em><code>exception_var</code></em> (たとえば、<code>catch (e)</code> における <code>e</code>) が例外の値を保持します。この識別子を使用して、発生した例外についての情報を取得することができます。この識別子は <code>catch</code> ブロックの{{Glossary("Scope", "スコープ")}}でのみ利用できます。例外の値が必要ない場合にはこれは省略できます。</p>

<pre class="brush: js notranslate">function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
</pre>

<h3 id="The_finally-block" name="The_finally-block">finally ブロック</h3>

<p><code>finally</code> ブロックには、<code>try</code> ブロックおよび <code>catch</code> ブロックを実行した後で、<code>try...catch...finally</code> の次の文が実行される前に実行される文が入ります。なお、<code>finally</code> ブロックは例外が発生するかどうかにかかわらず実行されます。また、例外が発生した場合、<code>finally</code> ブロックは例外を処理する <code>catch</code> ブロックがなくても実行されます。</p>

<p>次の例では <code>finally</code> ブロックの一つの使用例を示します。このコードはファイルを開き、それからファイルを使用する分を実行します。<code>finally</code> ブロックは、例外が発生したとしてもその後で確実にファイルを閉じるよう保証します。</p>

<pre class="brush: js notranslate">openMyFile();
try {
  // リソースを結び付けます
  writeMyFile(theData);
}
finally {
  closeMyFile(); // リソースを常に閉じます
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Nested_try-blocks" name="Nested_try-blocks">入れ子になった try ブロック</h3>

<p>最初に、次のもので何が起きるか見てみましょう。</p>

<pre class="brush: js notranslate">try {
  try {
    throw new Error('oops');
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "finally"
// "outer" "oops"
</pre>

<p>ここで、既に内部の <code>try</code> ブロックに <code>catch</code> ブロックを追加しているので、既に例外を捕捉しています。</p>

<pre class="brush: js notranslate">try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
</pre>

<p>そして、エラーを送りなおします。</p>

<pre class="brush: js notranslate">try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
</pre>

<p>送り直されない限り、例外はどれでも最も内側の <code>catch</code> ブロックで一度だけ捕捉されます。もちろん、何らかの例外が「内側の」のブロックで発生した場合 (<code>catch</code> ブロックのコードで例外が発生することを行った場合)、「外側の」ブロックで捕捉されます。</p>

<h3 id="Returning_from_a_finally_block" name="Returning_from_a_finally_block">finally ブロックからの return</h3>

<p><code>finally</code> ブロックが値を返した場合、<code>try</code> ブロックや <code>catch</code> ブロックの <code>return</code> 文に関係なく、その値が <code>try-catch-finally</code> 全体の返値になります。これは <code>catch</code> ブロック内で送出された例外も含みます。</p>

<pre class="brush: js notranslate">(function() {
  try {
    try {
      throw new Error('oops');
    } catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    } finally {
      console.log('finally');
      return;
    }
  } catch (ex) {
    console.error('outer', ex.message);
  }
})();

// Output:
// "inner" "oops"
// "finally"</pre>

<p>外側の "oops" は <code>finally</code> ブロックに return があるため送出されません。同じことが、<code>catch</code> ブロックから返されているそのほかの値にも適用されます。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-try-statement', 'try statement')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.statements.try_catch")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error")}}</li>
 <li>{{jsxref("Statements/throw", "throw")}}</li>
</ul>
