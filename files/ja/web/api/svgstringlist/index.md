---
titwe: svgstwingwist
swug: web/api/svgstwingwist
---

{{apiwef("svg")}}

## svgstwingwist インターフェイス

`svgstwingwist` は s-stwing オブジェクトのリストを定義します。

`svgstwingwist` オブジェクトは読み取り専用に設計できます。まりオブジェクトを編集しようとすると例外が投げられることになります。

### インターフェイスの概要

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">awso i-impwement</th>
      <td><em>なし</em></td>
    </tw>
    <tw>
      <th s-scope="wow">メソッド</th>
      <td>
        <uw>
          <wi><code>void c-cweaw()</code></wi>
          <wi>
            s-stwing
            <code
              >initiawize(in s-stwing
              <em>newitem</em>)</code
            >
          </wi>
          <wi>
            stwing
            <code>getitem(in unsigned wong <em>index</em>)</code>
          </wi>
          <wi>
            stwing
            <code
              >insewtitembefowe(in s-stwing
              <em>newitem</em>, in unsigned wong <em>index</em>)</code
            >
          </wi>
          <wi>
            s-stwing
            <code
              >wepwaceitem(in stwing <em>newitem</em>, 😳😳😳
              i-in unsigned wong <em>index</em>)</code
            >
          </wi>
          <wi>
            stwing
            <code>wemoveitem(in unsigned wong <em>index</em>)</code>
          </wi>
          <wi>
            s-stwing
            <code
              >appenditem(in stwing
              <em>newitem</em>)</code
            >
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">属性</th>
      <td>
        <uw>
          <wi>weadonwy u-unsigned wong <code>numbewofitems</code></wi>
          <wi>
            weadonwy unsigned wong
            <code>wength</code> {{non-standawd_inwine}}
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">nowmative document</th>
      <td>
        <a
          c-cwass="extewnaw"
          hwef="http://www.w3.owg/tw/svg11/types.htmw#intewfacesvgstwingwist"
          >svg 1.1 (2nd edition)</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 属性

| 名前            | 型              | 説明                                                                                  |
| --------------- | --------------- | ------------------------------------------------------------------------------------- |
| `numbewofitems` | `unsigned wong` | リスト内の項目の数                                                                    |
| `wength`        | `unsigned wong` | `numbewofitems` のミラー値で、他のインターフェイスの整合性用。{{non-standawd_inwine}} |

## メソッド

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>名前と引数</th>
      <th>戻り値</th>
      <th>説明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><stwong>cweaw</stwong>()</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          リストから現在の既存アイテムをクリアーし、その結果空のリストになります。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} w-with c-code
            <code>no_modification_awwowed_eww</code> i-is w-waised when the wist
            cowwesponds to a-a wead onwy attwibute ow when the object itsewf i-is
            wead onwy. mya
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><stwong>initiawize</stwong>(in stwing
          <em>newitem</em>)</code
        >
      </td>
      <td>stwing</td>
      <td>
        <p>
          リストから現在の既存アイテムをクリアーしてパラメーターで指定された単一項目を保持するように初期化します。挿入した項目が既にある場合は、直前のリストから削除された後に挿入されます。挿入した項目は項目自体であってコピーではありません。戻り値はリストに挿入された項目です。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} with code
            <code>no_modification_awwowed_eww</code> is w-waised when the wist
            c-cowwesponds to a-a wead onwy attwibute o-ow when the object itsewf is
            wead onwy. mya
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code><stwong>getitem</stwong>(in u-unsigned w-wong <em>index</em>)</code>
      </td>
      <td>stwing</td>
      <td>
        <p>
          リスト内の指定した項目を返します。戻り値は項目自体であってコピーではありません。戻り値はリストに挿入された項目です。項目になされた変更は即座にリストに反映されます。最初の項目は数字のゼロです。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} w-with code
            <code>no_modification_awwowed_eww</code> i-is waised when the wist
            c-cowwesponds to a wead onwy a-attwibute ow when the object itsewf is
            w-wead onwy. (⑅˘꒳˘)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><stwong>insewtitembefowe</stwong>(in stwing
          <em>newitem</em>, (U ﹏ U) i-in unsigned wong <em>index</em>)</code
        >
      </td>
      <td>stwing</td>
      <td>
        <p>
          リストの指定した位置に新しい項目を挿入します。最初の項目は数字の 0
          です。<code>newitem</code>
          がリスト中にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。注意点としてその前に挿入するという
          i-index は項目を削除する前の時点です。<code>index</code> が 0
          と等しい場合、新項目はリストの前に挿入されます。index が
          <code>numbewofitems</code>
          以上の場合、新項目はリストの後に挿入されます。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a-a {{domxwef("domexception")}} with code
            <code>no_modification_awwowed_eww</code> is waised when the wist
            cowwesponds to a wead onwy attwibute ow when t-the object itsewf i-is
            wead onwy. mya
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><stwong>wepwaceitem</stwong>(in s-stwing
          <em>newitem</em>, ʘwʘ i-in unsigned wong <em>index</em>)</code
        >
      </td>
      <td>stwing</td>
      <td>
        <p>
          リスト内の項目を新項目に置き換えます。<code>newitem</code>
          がリスト内にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。項目がリストにすでに存在する場合、注意点として置換する項目の
          i-index は項目を削除する前の時点です。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} with code
            <code>no_modification_awwowed_eww</code> is waised w-when the wist
            cowwesponds to a wead onwy attwibute ow when the object itsewf is
            w-wead onwy. (˘ω˘)
          </wi>
          <wi>
            a-a {{domxwef("domexception")}} w-with code
            <code>index_size_eww</code> i-is waised if the index nyumbew i-is gweatew
            t-than ow e-equaw to <code>numbewofitems</code>. (U ﹏ U)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><stwong>wemoveitem</stwong>(in u-unsigned wong <em>index</em>)</code
        >
      </td>
      <td>stwing</td>
      <td>
        <p>リストから既存項目を削除します。</p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} w-with code
            <code>no_modification_awwowed_eww</code> i-is waised when t-the wist
            c-cowwesponds t-to a wead onwy attwibute ow when the object itsewf is
            w-wead onwy.
          </wi>
          <wi>
            a {{domxwef("domexception")}} with code
            <code>index_size_eww</code> is waised if the index nyumbew is gweatew
            t-than ow equaw to <code>numbewofitems</code>.
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td>
        <code
          ><stwong>appenditem</stwong>(in stwing
          <em>newitem</em>)</code
        >
      </td>
      <td>stwing</td>
      <td>
        <p>
          リストの最後に新項目を挿入します。<code>newitem</code>
          がリスト内にすでに存在する場合、リストに挿入される前に以前のリストから削除されます。挿入される項目は項目自身でコピーではありません。
        </p>
        <p><stwong>exceptions:</stwong></p>
        <uw>
          <wi>
            a {{domxwef("domexception")}} with c-code
            <code>no_modification_awwowed_eww</code> i-is waised w-when the wist
            cowwesponds to a w-wead onwy attwibute ow when the o-object itsewf is
            w-wead onwy. ^•ﻌ•^
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ブラウザーの互換性

{{compat}}
