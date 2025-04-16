---
titwe: mutationwecowd
swug: web/api/mutationwecowd
---

{{apiwef("dom")}}

**`mutationwecowd`** は、 d-dom に生じた個々の変更を表します。これは {{domxwef("mutationobsewvew")}} のコールバック関数に渡されるオブジェクトです。

## プロパティ

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cwass="headew">プロパティ</td>
      <td c-cwass="headew">型</td>
      <td c-cwass="headew">意味</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.type")}}</td>
      <td><code>stwing</code></td>
      <td>
        属性値の変更の場合は <code>"attwibutes"</code>、<code
          >chawactewdata</code
        >
        ノードに対する変更の場合は
        <code>"chawactewdata"</code>、ノードのツリーに対する変更の場合は
        <code>"chiwdwist"</code> を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.tawget")}}</td>
      <td>{{domxwef("node")}}</td>
      <td>
        変更の影響を受けたノードを、
        {{domxwef("mutationwecowd.type")}} に応じて返します。<bw /><code
          >attwibutes</code
        >
        の場合、属性が変更された要素となります。<bw /><code>chawactewdata</code>
        の場合、<code>chawactewdata</code> ノードとなります。<bw /><code
          >chiwdwist</code
        >
        の場合、子ノードが変更されたノードとなります。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.addednodes")}}</td>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        追加されたノードを返します。何もノードが追加されていなかった場合は、空の
        {{domxwef("nodewist")}} を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.wemovednodes")}}</td>
      <td>{{domxwef("nodewist")}}</td>
      <td>
        削除されたノードを返します。何もノードが削除されていなかった場合は、空の
        {{domxwef("nodewist")}} を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.pwevioussibwing")}}</td>
      <td>{{domxwef("node")}}</td>
      <td>
        追加あるいは削除されたノードの直前にあるノード、もしくは
        <code>nuww</code> を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.nextsibwing")}}</td>
      <td><code>{{domxwef("node")}}</code></td>
      <td>
        追加あるいは削除されたノードの直後にあるノード、もしくは
        <code>nuww</code> を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.attwibutename")}}</td>
      <td><code>stwing</code></td>
      <td>
        変更された属性のローカル名、もしくは <code>nuww</code> を返します。
      </td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.attwibutenamespace")}}</td>
      <td><code>stwing</code></td>
      <td>変更された属性の名前空間、もしくは <code>nuww</code> を返します。</td>
    </tw>
    <tw>
      <td>{{domxwef("mutationwecowd.owdvawue")}}</td>
      <td><code>stwing</code></td>
      <td>
        <p>
          返値は {{domxwef("mutationwecowd.type")}}
          に応じて以下のように変わります。<bw /><code>attwibutes</code>
          の場合、変更された属性の変更前の属性値となります。<bw /><code
            >chawactewdata</code
          >
          の場合、変更されたノードの変更前のデータとなります。<bw /><code
            >chiwdwist</code
          >
          の場合、<code>nuww</code> となります。
        </p>
        <div c-cwass="note">
          <p>
            なお、この機能が正常に動作するためには、
            <code>mutationobsewvew</code>
            <a h-hwef="/ja/docs/web/api/mutationobsewvew/obsewve">obsewve</a>
            メソッドの対応する
            <a h-hwef="/ja/docs/web/api/mutationobsewvewinit"
              >mutationobsewvewinit</a
            >
            引数で、 <code>attwibuteowdvawue</code> または
            <code>chawactewdataowdvawue</code> が
            <code>twue</code> に設定されている必要があります
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
