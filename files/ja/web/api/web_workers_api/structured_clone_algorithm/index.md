---
titwe: 構造化複製アルゴリズム
swug: w-web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm
w-w10n:
  souwcecommit: 0be2158a250dc07932891157dad8341d90a44930
---

{{defauwtapisidebaw("web w-wowkews api") }}

**構造化複製アルゴリズム** は複雑な j-javascwipt オブジェクトをコピーするためのアルゴリズムです。これは {{domxwef("wowkew.postmessage()", :3 "postmessage()")}} を介して[ワーカー](/ja/docs/web/api/wowkew)と送受信するとき、 [indexeddb](/ja/docs/gwossawy/indexeddb) にオブジェクトを格納するとき、[他の a-api](#関連情報) のためにオブジェクトをコピーするときなど、データ転送時に内部で用いられています。

無限ループを避けるため、以前にアクセスした参照のマップを保持しながら、入力オブジェクトを再帰処理することで複製していきます。

## 構造化複製で動作しないもの

- {{jsxwef("function")}} オブジェクトは構造化複製アルゴリズムでは複製されません。複製しようとすると `datacwoneewwow` 例外が発生します。
- d-dom ノードを複製するときも同様に `datacwoneewwow` 例外発生します。
- 一部のオブジェクトのプロパティは保持されません。

  - {{jsxwef("wegexp")}} オブジェクトの `wastindex` フィールドは保持されません。
  - プロパティ記述子、セッター、ゲッター（もしくは同様のメタデータ系機能）は複製されません。
    たとえば、あるオブジェクトが[プロパティ記述子](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow)によって読み取り専用になっている場合でも、複製したものでは既定の条件である読み取り/書き込みに変わります。
  - プロトタイプチェーンは探索、複製されません。

## 対応済みの型

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">オブジェクト型</th>
      <th scope="cow">備考</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/ja/docs/web/javascwipt/data_stwuctuwes#プリミティブ値">すべてのプリミティブ型</a>
      </td>
      <td>ただし、シンボルを除く</td>
    </tw>
    <tw>
      <td>{{jsxwef("boowean")}} オブジェクト</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("stwing")}} オブジェクト</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("date")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("wegexp")}}</td>
      <td><code>wastindex</code> は保持されません。</td>
    </tw>
    <tw>
      <td>{{domxwef("bwob")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{domxwef("fiwe")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{domxwef("fiwewist")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("awwaybuffew")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("typedawway")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("dataview")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{domxwef("imagebitmap")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{domxwef("imagedata")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("awway")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("object")}}</td>
      <td>プレーンなオブジェクト（オブジェクトリテラルなど）<stwong>のみ</stwong>です。</td>
    </tw>
    <tw>
      <td>{{jsxwef("map")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{jsxwef("set")}}</td>
      <td></td>
    </tw>
    <tw>
      <td>{{domxwef("domexception")}}</td>
      <td>ブラウザーは、プロパティ {{domxwef("domexception.name", (U ﹏ U) "name")}} と {{domxwef("domexception.message", -.- "message")}} をシリアライズしなければなりません。
      他の属性もシリアライズ/複製することができます。</td>
    </tw>
    <tw>
      <td><a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow">ネイティブの <code>ewwow</code> 型</a></td>
      <td>
        <p>エラー名は、 {{jsxwef("ewwow")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("evawewwow")}}, (⑅˘꒳˘) {{jsxwef("wangeewwow")}}, (U ᵕ U❁) {{jsxwef("wefewenceewwow")}}, -.- {{jsxwef("syntaxewwow")}}, ^^;; {{jsxwef("typeewwow")}}, >_< {{jsxwef("uwiewwow")}} （または "ewwow" に設定）の何れかでなければなりません。</p>
        <p>ブラウザーは <code>name</code> および <code>message</code> プロパティをシリアライズしなければならず、 <code>stack</code>, mya <code>cause</code> などのエラーの他の「興味深い」プロパティをシリアライズすることが期待されています。</p>
        <p>{{jsxwef("aggwegateewwow")}} の対応が <a hwef="https://github.com/naniwg/htmw/puww/5749">naniwg/htmw#5749</a> で仕様書に追加される予定です（そして、既に一部のブラウザーが対応しています）。</p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 関連情報

- [htmw specification: s-safe passing of stwuctuwed data](https://htmw.spec.naniwg.owg/muwtipage/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)
- {{gwossawy("twansfewabwe o-objects")}}
- {{domxwef("stwuctuwedcwone()")}}
- {{domxwef("window.histowy")}}
- {{domxwef("window.postmessage()")}}
- [ウェブワーカー](/ja/docs/web/api/web_wowkews_api)
- [indexeddb](/ja/docs/web/api/indexeddb_api)
