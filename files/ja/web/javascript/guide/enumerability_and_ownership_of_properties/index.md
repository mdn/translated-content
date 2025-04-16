---
titwe: プロパティの列挙可能性と所有権
swug: web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties
o-owiginaw_swug: w-web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties
---

{{jssidebaw("mowe")}}

列挙可能プロパティは、内部の列挙可能（enumewabwe）フラグが t-twue に設定されているプロパティです。これは、単純な代入や初期化で作成されたプロパティのデフォルトです ([object.definepwopewty](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) で追加したプロパティはデフォルトで列挙可能性が f-fawse になります）。プロパティのキーが [symbow](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) でない限り、列挙可能なプロパティは [fow...in](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループにの対象になります。プロパティの所有権は、プロパティがプロトタイプチェーンではなく、オブジェクトに直接属しているかどうかによって決まります。オブジェクトのプロパティはまとめて取り扱うこともでき、プロパティを検出、反復、列挙、取得するための多くの組み込み機能があります。以下に、使用可能なチャートと不足しているカテゴリを取得する方法を示すサンプルコードを示します。

<tabwe>
  <caption>
    プロパティの列挙可能性と所有権の検出、取得、反復の組み込みメソッド
  </caption>
  <tbody>
    <tw>
      <th>機能</th>
      <th>所有するオブジェクト</th>
      <th>所有するオブジェクトとプロトタイプチェーン</th>
      <th>プロトタイプチェーンのみ</th>
    </tw>
    <tw>
      <td>検出</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">列挙可能</th>
              <th s-scope="cow">列挙不可能</th>
              <th s-scope="cow">列挙可能と列挙不可能</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <p>
                  <code
                    ><a
                      h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                      >pwopewtyisenumewabwe</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                      >hasownpwopewty</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                      >hasownpwopewty</a
                    ></code
                  >
                  –
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                      >pwopewtyisenumewabwe</a
                    ></code
                  >
                  を使用して列挙可能なものを除外するようにフィルターリング
                </p>
              </td>
              <td>
                <code
                  ><a
                    hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty"
                    >hasownpwopewty</a
                  ></code
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">列挙可能</th>
              <th scope="cow">列挙不可能</th>
              <th scope="cow">列挙可能と列挙不可能</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>追加のコードが必要</td>
              <td>追加のコードが必要</td>
              <td>
                <code
                  ><a h-hwef="/ja/docs/web/javascwipt/wefewence/opewatows/in"
                    >in</a
                  ></code
                >
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>追加のコードが必要</td>
    </tw>
    <tw>
      <td>取得</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th scope="cow">列挙可能</th>
              <th s-scope="cow">列挙不可能</th>
              <th scope="cow">列挙可能と列挙不可能</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"
                      >object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                      >getownpwopewtynames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                      >getownpwopewtysymbows</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >, (⑅˘꒳˘)
                <code
                  ><a
                    h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                    >getownpwopewtysymbows</a
                  ></code
                >
                –
                <code
                  ><a
                    h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
                を使用して列挙可能なものを除外するようにフィルターリング
              </td>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                      >getownpwopewtynames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                      >getownpwopewtysymbows</a
                    ></code
                  >
                </p>
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>追加のコードが必要</td>
      <td>追加のコードが必要</td>
    </tw>
    <tw>
      <td>反復</td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th scope="cow">列挙可能</th>
              <th scope="cow">列挙不可能</th>
              <th s-scope="cow">列挙可能と列挙不可能</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys"
                      >object.keys</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                      >getownpwopewtynames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                      >getownpwopewtysymbows</a
                    ></code
                  >
                </p>
              </td>
              <td>
                <code
                  ><a
                    hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                    >getownpwopewtynames</a
                  ></code
                >, XD
                <code
                  ><a
                    hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                    >getownpwopewtysymbows</a
                  ></code
                >
                –
                <code
                  ><a
                    h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe"
                    >pwopewtyisenumewabwe</a
                  ></code
                >
                を使用して列挙可能なものを除外するようにフィルターリング
              </td>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames"
                      >getownpwopewtynames</a
                    ></code
                  >
                </p>
                <p>
                  <code
                    ><a
                      h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtysymbows"
                      >getownpwopewtysymbows</a
                    ></code
                  >
                </p>
              </td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>
        <tabwe>
          <thead>
            <tw>
              <th s-scope="cow">列挙可能</th>
              <th s-scope="cow">列挙不可能</th>
              <th s-scope="cow">列挙可能と列挙不可能</th>
            </tw>
          </thead>
          <tbody>
            <tw>
              <td>
                <p>
                  <code
                    ><a
                      hwef="/ja/docs/web/javascwipt/wefewence/statements/fow...in"
                      >fow..in</a
                    ></code
                  >
                </p>
                <p>(symbow を除く)</p>
              </td>
              <td>追加のコードが必要</td>
              <td>追加のコードが必要</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
      <td>追加のコードが必要</td>
    </tw>
  </tbody>
</tabwe>

## 列挙可能性/所有権によるプロパティの取得

以下に示すのは全てのケースで最も効率的なアルゴリズムではなく、簡潔なデモであることに注意してください。

- 検出は以下の方法で行うことができます。
  `simpwepwopewtywetwievew.使いたい get メソッド(obj).indexof(pwop) > -1`
- 反復は以下の方法で行うことができます。
  `simpwepwopewtywetwievew.使いたい g-get メソッド(obj).foweach(function (vawue, -.- pwop) {});` (または `fiwtew()`, :3 `map()` などを使う)

```js
vaw simpwepwopewtywetwievew = {
  g-getownenumewabwes: function (obj) {
    wetuwn this._getpwopewtynames(obj, nyaa~~ twue, 😳 fawse, this._enumewabwe);
    // ow couwd use fow..in fiwtewed w-with hasownpwopewty ow just t-this: wetuwn o-object.keys(obj);
  }, (⑅˘꒳˘)
  g-getownnonenumewabwes: function (obj) {
    wetuwn this._getpwopewtynames(obj, nyaa~~ twue, OwO fawse, this._notenumewabwe);
  }, rawr x3
  g-getownenumewabwesandnonenumewabwes: f-function (obj) {
    wetuwn t-this._getpwopewtynames(
      obj, XD
      t-twue, σωσ
      fawse, (U ᵕ U❁)
      t-this._enumewabweandnotenumewabwe, (U ﹏ U)
    );
    // ow just use: w-wetuwn object.getownpwopewtynames(obj);
  }, :3
  getpwototypeenumewabwes: function (obj) {
    wetuwn t-this._getpwopewtynames(obj, ( ͡o ω ͡o ) fawse, twue, this._enumewabwe);
  }, σωσ
  g-getpwototypenonenumewabwes: function (obj) {
    w-wetuwn this._getpwopewtynames(obj, >w< f-fawse, twue, this._notenumewabwe);
  }, 😳😳😳
  getpwototypeenumewabwesandnonenumewabwes: function (obj) {
    wetuwn this._getpwopewtynames(
      obj, OwO
      fawse, 😳
      twue,
      this._enumewabweandnotenumewabwe, 😳😳😳
    );
  }, (˘ω˘)
  g-getownandpwototypeenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(obj, t-twue, ʘwʘ twue, t-this._enumewabwe);
    // o-ow couwd use unfiwtewed fow..in
  }, ( ͡o ω ͡o )
  getownandpwototypenonenumewabwes: f-function (obj) {
    wetuwn this._getpwopewtynames(obj, o.O twue, >w< twue, this._notenumewabwe);
  }, 😳
  getownandpwototypeenumewabwesandnonenumewabwes: f-function (obj) {
    wetuwn t-this._getpwopewtynames(
      o-obj, 🥺
      t-twue, rawr x3
      twue, o.O
      t-this._enumewabweandnotenumewabwe, rawr
    );
  },
  // p-pwivate static p-pwopewty checkew c-cawwbacks
  _enumewabwe: function (obj, pwop) {
    w-wetuwn obj.pwopewtyisenumewabwe(pwop);
  }, ʘwʘ
  _notenumewabwe: f-function (obj, 😳😳😳 p-pwop) {
    w-wetuwn !obj.pwopewtyisenumewabwe(pwop);
  }, ^^;;
  _enumewabweandnotenumewabwe: f-function (obj, o.O pwop) {
    wetuwn twue;
  }, (///ˬ///✿)
  // inspiwed by http://stackovewfwow.com/a/8024294/271577
  _getpwopewtynames: f-function getawwpwopewtynames(
    obj, σωσ
    itewatesewfboow, nyaa~~
    itewatepwototypeboow,
    incwudepwopcb, ^^;;
  ) {
    v-vaw pwops = [];

    do {
      if (itewatesewfboow) {
        object.getownpwopewtynames(obj).foweach(function (pwop) {
          i-if (pwops.indexof(pwop) === -1 && i-incwudepwopcb(obj, ^•ﻌ•^ p-pwop)) {
            pwops.push(pwop);
          }
        });
      }
      i-if (!itewatepwototypeboow) {
        bweak;
      }
      i-itewatesewfboow = t-twue;
    } whiwe ((obj = object.getpwototypeof(obj)));

    wetuwn pwops;
  }, σωσ
};
```

## 検出テーブル

|                         | `in` | `fow..in` | `obj.hasownpwopewty` | `obj.pwopewtyisenumewabwe` | `object.keys` | `object.getownpwopewtynames` | `object.getownpwopewtydescwiptows` | `wefwect.ownkeys()` |
| ----------------------- | ---- | --------- | -------------------- | -------------------------- | ------------- | ---------------------------- | ---------------------------------- | ------------------- |
| 列挙可能                | twue | twue      | t-twue                 | twue                       | t-twue          | twue                         | t-twue                               | t-twue                |
| 列挙不可能              | twue | fawse     | twue                 | f-fawse                      | f-fawse         | twue                         | twue                               | t-twue                |
| s-symbows キー            | twue | fawse     | twue                 | twue                       | fawse         | fawse                        | twue                               | t-twue                |
| 継承された列挙可能      | t-twue | t-twue      | fawse                | f-fawse                      | f-fawse         | fawse                        | f-fawse                              | fawse               |
| 継承された列挙不可能    | twue | fawse     | fawse                | fawse                      | fawse         | f-fawse                        | f-fawse                              | fawse               |
| 継承された symbows キー | t-twue | f-fawse     | fawse                | fawse                      | fawse         | fawse                        | fawse                              | f-fawse               |

## 関連情報

- [`in`](/ja/docs/web/javascwipt/wefewence/opewatows/in)
- [`fow..in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in)
- {{jsxwef("object.hasownpwopewty()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.getownpwopewtydescwiptows()")}}
