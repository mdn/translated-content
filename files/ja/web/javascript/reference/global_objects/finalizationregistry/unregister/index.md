---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
tags:
  - FinalizationRegistry
  - JavaScript
  - Method
  - Prototype
  - Reference
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
---
<div>{{JSRef}}</div>

<p><code>unregister</code> は対象のオブジェクトを {{jsxref("FinalizationRegistry")}} インスタンスから登録解除します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>registry</var>.unregister(<var>unregisterToken</var>);</code>
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>unregisterToken</var></code></dt>
 <dd>対象オブジェクトを登録したときに {{jsxref("FinalizationRegistry.prototype.register", "register")}} メソッドで使用したトークンです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h2 id="Notes" name="Notes">注</h2>

<p>対象オブジェクトの回収が完了すると、レジストリに登録された状態ではなくなります。クリーンアップコールバックですべてに <code>unregister</code> を行う必要はありません。クリーンアップコールバックを受信しておらず、クリーンアップコールバックを受信する必要がなくなった場合にのみ <code>unregister</code> を呼び出してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_unregister" name="Using_unregister">unregister の使用</h3>

<p>この例では、登録解除トークンとして同じオブジェクトを使用して対象のオブジェクトを登録し、その後、 <code>unregister</code> を介して対象のオブジェクトの登録を解除します。</p>

<pre class="brush: js notranslate">class Thingy {
    #cleanup = label =&gt; {
    //         ^^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the object with the label "${label}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance. Be sure to call `release` when you're done with it.
     *
     * @param   label       A label for the `Thingy`.
     */
    constructor(label) {
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this);
        //          target −−−−−^^^^         ^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        this.#registry.unregister(this);
        //                        ^^^^−−−−− unregister token
    }
}
</pre>

<p>この例では、登録解除トークンとして別のオブジェクトを使用して対象のオブジェクトを登録しています。</p>

<pre class="brush: js notranslate"> {
    //         ^^^^−−−−− held value
        console.error(
            `The \`release\` method was never called for the \`Thingy\` for the file "${file.name}"`
        );
    };
    #registry = new FinalizationRegistry(this.#cleanup);

    /**
     * Constructs a `Thingy` instance for the given file. Be sure to call `release` when you're done with it.
     *
     * @param   filename    The name of the file.
     */
    constructor(filename) {
        this.#file = File.open(filename);
        //                            vvvvv−−−−− held value
        this.#registry.register(this, label, this.#file);
        //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
    }

    /**
     * Releases resources held by this `Thingy` instance.
     */
    release() {
        if (this.#file) {
            this.#registry.unregister(this.#file);
            //                        ^^^^^^^^^^−−−−− unregister token
            File.close(this.#file);
            this.#file = null;
        }
    }
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('WeakRefs', '#sec-finalization-registry.prototype.unregister', 'FinalizationRegistry.prototype.unregister')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.FinalizationRegistry.unregister")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("FinalizationRegistry")}}</li>
</ul>
