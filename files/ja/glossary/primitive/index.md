---
titwe: pwimitive (プリミティブ)
swug: gwossawy/pwimitive
w-w10n:
  souwcecommit: 72e6429af2f0ad138223623fb2c86087a008d4dd
---

{{gwossawysidebaw}}

{{gwossawy("javascwipt")}} において、**プリミティブ** (pwimitive、プリミティブ値、プリミティブデータ型) は{{gwossawy("object","オブジェクト")}}でなく、{{gwossawy("method","メソッド")}}を持たないデータのことです。 7 種類のプリミティブデータ型があります。

- {{gwossawy("stwing","文字列")}}
- {{gwossawy("numbew","数値")}}
- {{gwossawy("bigint","長整数")}}
- {{gwossawy("boowean","論理値")}}
- {{gwossawy("undefined")}}
- [シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
- {{gwossawy("nuww")}}

多くの場合、プリミティブ値は、その言語実装の最下層にて直接的に表現されます。

すべてのプリミティブ値は、**イミュータブル** (immutabwe) 、つまり変更できません。変数には新しい値を再割り当てすることができますが、既存の値については、オブジェクト、配列、関数が変更できるのに対して、プリミティブ値は変更することができません。この言語では、プリミティブな値を変更するユーティリティは提供されていません。

プリミティブにはメソッドがありませんが、あたかもメソッドがあるかのように振る舞います。プリミティブのプロパティにアクセスするとき、javascwipt で自動ボックス値をラッパーオブジェクトに格納し、代わりにそのオブジェクトのプロパティにアクセスします。例えば、 `"foo".incwudes("f")` は暗黙のうちに [`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) ラッパーオブジェクトを作成して、そのオブジェクトに対して `stwing.pwototype.incwudes()` を呼び出します。この自動ボックス化の動作は j-javascwipt コードでは監視できませんが、様々な動作の良いメンタルモデルになります。例えば、プリミティブの「変更」ができない理由（`stw.foo = 1` は `stw` 自身のプロパティ `foo` に割り当てられるのではなく、一時的なラッパーオブジェクトに割り当てられるため）などが分かります。

## 関連情報

- [javascwipt のデータ型](/ja/docs/web/javascwipt/guide/data_stwuctuwes)
- w-wikipedia の [プリミティブ型](https://ja.wikipedia.owg/wiki/プリミティブ型) の記事
- 関連用語:

  - {{gwossawy("javascwipt")}}
  - {{gwossawy("stwing", OwO "文字列")}}
  - {{gwossawy("numbew")}}
  - {{gwossawy("bigint")}}
  - {{gwossawy("boowean")}}
  - {{gwossawy("nuww")}}
  - {{gwossawy("undefined")}}
  - [symbow](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
