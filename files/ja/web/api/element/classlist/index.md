---
title: Element.classList
slug: Web/API/Element/classList
tags:
  - API
  - DOM
  - Element
  - Read-only
  - Reference
  - プロパティ
  - 読取専用
translation_of: Web/API/Element/classList
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Element.classList</strong></code> は読み取り専用のプロパティで、生きた {{domxref("DOMTokenList")}} コレクションでその要素の <code>class</code> 属性を返します。これを使用してクラスリストを操作することができます。</p>

<p><code>classList</code> を使用することは、 {{domxref("element.className")}} から取得した空白区切りの文字列として要素のクラスのリストにアクセスすることの便利な代替手段になります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">const <var>elementClasses</var> = <var>elementNodeReference</var>.classList;
</pre>

<h3 id="Returns" name="Returns">返値</h3>

<p>{{domxref("DOMTokenList")}} で、その要素の <code>class</code> 属性を返します。 <code>class</code> 属性が設定されていない場合や空の場合は、空の <code>DOMTokenList</code> を返します。すなわち、 <code>DOMTokenList</code> の <code>length</code> プロパティが <code>0</code> になります。</p>

<p><code>DOMTokenList</code> 自体は読み取り専用ですが、 {{domxref("DOMTokenList/add", "add()")}} や {{domxref("DOMTokenList/remove", "remove()")}} を用いてオブジェクトを変更することはできます。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">const div = document.createElement('div');
div.className = 'foo';

// 最初の状態: &lt;div class="foo"&gt;&lt;/div&gt;
console.log(div.outerHTML);

// classList API を用いてクラスを除去、追加
div.classList.remove("foo");
div.classList.add("anotherclass");

// &lt;div class="anotherclass"&gt;&lt;/div&gt;
console.log(div.outerHTML);

// visible が設定されていれば除去し、なければ追加
div.classList.toggle("visible");

// i が 10 未満であるかどうかの条件によって visible を追加または除去
div.classList.toggle("visible", i &lt; 10 );

console.log(div.classList.contains("foo"));

// 複数のクラスを追加または除去
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// spread syntax を使用したクラスの追加または除去
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// "foo" クラスを "bar" クラスで置き換え
div.classList.replace("foo", "bar");</pre>

<div class="note">
<p>Firefox 26 以前のバージョンでは、 add/remove/toggle メソッドでいくつかの引数の使用方法を実装していません。詳しくは <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=814014">https://bugzilla.mozilla.org/show_bug.cgi?id=814014</a> を参照してください。</p>
</div>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>古い <code><a href="https://msdn.microsoft.com/en-us/windows/ms536956(v=vs.71)">onpropertychange</a></code> イベントは、生きた <code>classList</code> のモックアップを作成することができますが、これは <code>Element.prototype.className</code> プロパティが変更されたときにこのイベントが発生するからです。</p>

<p>以下のポリフィルは <code>classList</code> と <code>DOMTokenList</code> の両方のためのもので、 <code>Element.prototype.classList</code> のすべての標準メソッドおよびプロパティを<strong>完全に</strong>準拠 (カバー) することを保証します。 <strong>IE10</strong>-<strong>IE11</strong> ブラウザーに加えて、 <strong>IE 6-9</strong> で<em>ほぼ</em>同じ動作をします。</p>

<pre class="brush: js">// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\s﻿]+|[\s﻿]+$/g, ''); };
(function(window){"use strict"; // prevent global namespace pollution
if(!window.DOMException) (DOMException = function(reason){this.message = reason}).prototype = new Error;
var wsRE = /[\11\12\14\15\40]/, wsIndex = 0, checkIfValidClassListEntry = function(O, V) {
  if (V === "") throw new DOMException(
    "Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty." );
  if((wsIndex=V.search(wsRE))!==-1) throw new DOMException("Failed to execute '"+O+"' on 'DOMTokenList': " +
    "The token provided ('"+V[wsIndex]+"') contains HTML space characters, which are not valid in tokens.");
}
// 2. Implement the barebones DOMTokenList livelyness polyfill
if (typeof DOMTokenList !== "function") (function(window){
    var document = window.document, Object = window.Object, hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty, allowTokenListConstruction = 0, skipPropChange = 0;
    function DOMTokenList(){
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }
    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function(){return this.value};
    DOMTokenList.prototype.add = function(){
        a: for(var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v!==argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("add", val);
            for (var i=0, Len=proto.length, resStr=val; i !== Len; ++i)
                if (this[i] === val) continue a; else resStr += " " + this[i];
            this[Len] = val, proto.length += 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    DOMTokenList.prototype.remove = function(){
        for (var v=0, argLen=arguments.length,val="",ele=this[" uCL"],proto=ele[" uCLp"]; v !== argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("remove", val);
            for (var i=0, Len=proto.length, resStr="", is=0; i !== Len; ++i)
                if(is){ this[i-1]=this[i] }else{ if(this[i] !== val){ resStr+=this[i]+" "; }else{ is=1; } }
            if (!is) continue;
            delete this[Len], proto.length -= 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    window.DOMTokenList = DOMTokenList;
    function whenPropChanges(){
        var evt = window.event, prop = evt.propertyName;
        if ( !skipPropChange &amp;&amp; (prop==="className" || (prop==="classList" &amp;&amp; !defineProperty)) ) {
            var target = evt.srcElement, protoObjProto = target[" uCLp"], strval = "" + target[prop];
            var tokens=strval.trim().split(wsRE), resTokenList=target[prop==="classList"?" uCL":"classList"];
            var oldLen = protoObjProto.length;
            a: for(var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI){
                for(var innerI=0; innerI!==cI; ++innerI) if(tokens[innerI]===tokens[cI]) {sub++; continue a;}
                resTokenList[cI-sub] = tokens[cI];
            }
            for (var i=cLen-sub; i &lt; oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            if(prop !== "classList") return;
            skipPropChange = 1, target.classList = resTokenList, target.className = strval;
            skipPropChange = 0, resTokenList.length = tokens.length - sub;
        }
    }
    function polyfillClassList(ele){
        if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
        ele.detachEvent( "onpropertychange", whenPropChanges ); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try{ function protoObj(){} protoObj.prototype = new DOMTokenList(); }
        finally { allowTokenListConstruction = 0 }
        var protoObjProto = protoObj.prototype, resTokenList = new protoObj();
        a: for(var toks=ele.className.trim().split(wsRE), cI=0, cLen=toks.length, sub=0; cI !== cLen; ++cI){
            for (var innerI=0; innerI !== cI; ++innerI) if (toks[innerI] === toks[cI]) { sub++; continue a; }
            this[cI-sub] = toks[cI];
        }
        protoObjProto.length = cLen-sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;
        if (defineProperty) { defineProperty(ele, "classList", { // IE8 &amp; IE9 allow defineProperty on the DOM
            enumerable:   1, get: function(){return resTokenList},
            configurable: 0, set: function(newVal){
                skipPropChange = 1, ele.className = protoObjProto.value = (newVal += ""), skipPropChange = 0;
                var toks = newVal.trim().split(wsRE), oldLen = protoObjProto.length;
                a: for(var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI){
                    for(var innerI=0; innerI!==cI; ++innerI) if(toks[innerI]===toks[cI]) {sub++; continue a;}
                    resTokenList[cI-sub] = toks[cI];
                }
                for (var i=cLen-sub; i &lt; oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            }
        }); defineProperty(ele, " uCLp", { // for accessing the hidden prototype
            enumerable: 0, configurable: 0, writeable: 0, value: protoObj.prototype
        }); defineProperty(protoObjProto, " uCL", {
            enumerable: 0, configurable: 0, writeable: 0, value: ele
        }); } else { ele.classList=resTokenList, ele[" uCL"]=resTokenList, ele[" uCLp"]=protoObj.prototype; }
        ele.attachEvent( "onpropertychange", whenPropChanges );
    }
    try { // Much faster &amp; cleaner version for IE8 &amp; IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
            enumerable: 1,   get: function(val){
                                 if (!hasOwnProp.call(this, "classList")) polyfillClassList(this);
                                 return this.classList;
                             },
            configurable: 0, set: function(val){this.className = val}
        });
    } catch(e) { // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText=(
            '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&amp;&amp;window[" uCL"](this))}' + //  IE6
            '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&amp;&amp;window[" uCL"](this))}' //IE7-8
        );
    }
})(window);
// 3. Patch in unsupported methods in DOMTokenList
(function(DOMTokenListProto, testClass){
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function(i){
        function NullCheck(n) {return n===void 0 ? null : n} return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a",0)!==false) DOMTokenListProto.toggle=function(val){
        if (arguments.length &gt; 1) return (this[arguments[1] ? "add" : "remove"](val), !!arguments[1]);
        var oldValue = this.value;
        return (this.remove(oldValue), oldValue === this.value &amp;&amp; (this.add(val), true) /*|| false*/);
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean")
        DOMTokenListProto.replace = function(oldToken, newToken){
            checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
            var oldValue = this.value;
            return (this.remove(oldToken), this.value !== oldValue &amp;&amp; (this.add(newToken), true));
        };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function(value){
        for (var i=0,Len=this.length; i !== Len; ++i) if (this[i] === value) return true;
        return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function(f){
        if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) f( this[i], i, this);
        else for (var i=0,Len=this.length,tArg=arguments[1]; i !== Len; ++i) f.call(tArg, this[i], i, this);
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex&lt;that.length ? {value: [nextIndex, that[nextIndex++]], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex&lt;that.length ? {value: that[nextIndex++], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex&lt;that.length ? {value: nextIndex++, done: false} : {done: true};
        }};
    };
})(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window);
</pre>

<h3 id="Caveats" name="Caveats">注意事項</h3>

<p>上記のポリフィルは機能が限定されています。現在、 IE 6-7 では、文書要素の外にある要素 (たとえば、 <code>document.createElement</code> によって作成された後、親ノードに追加される前の要素) を代替することができません。</p>

<p>しかし、 IE9 では正常に動作するはずです。代替バージョンの <code>classList</code> と W3 の仕様書との主な違いは、 IE 6-8 においては不変オブジェクト (プロパティを直接変更できないオブジェクト) を生成する方法がないという点です。しかし IE9 では、プロトタイプを拡張し、可視オブジェクトを凍結し、ネイティブのプロパティメソッドを上書きすることで可能です。しかし、このような操作は IE6-IE8 では機能せず、 IE9 ではウェブページ全体のパフォーマンスを大幅に低下させるため、これらの修正はこのポリフィルでは完全に実行できません。</p>

<p>IE6-7 の軽い注意事項ですが、このポリフィルは window オブジェクトの <code>window[" uCL"]</code> プロパティを使用して CSS の式とコミュニケーションを行い、 CSS の <code>x-uCLp</code> プロパティをすべての要素に付与し、 <code>element[" uCL"]</code> プロパティによってガーベジコレクションを行うことができるようにして性能を改善しています。すべてのポリフィルを使用したブラウザー (IE6-9) では、追加の <code>element[" uCLp"]</code> プロパティによって要素に標準に準拠したプロトタイピングを保証し、それぞれの <code>element["classList"]</code> オブジェクトに <code>DOMTokenList[" uCL"]</code> プロパティを追加することで、 DOMTokenList が自分自身の要素の範囲に収まることを保証します。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-element-classlist", "Element.classList")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-element-classlist", "Element.classList")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.classList")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("element.className")}}</li>
 <li>{{domxref("DOMTokenList")}}</li>
</ul>
