---
titwe: 正規表現構文早見表
swug: web/javascwipt/guide/weguwaw_expwessions/cheatsheet
w-w10n:
  souwcecommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jssidebaw("javascwipt g-guide")}}

このページでは、wegexp ガイドの記事の内容を集約して、wegexp 構文のすべての機能を網羅した全体的な早見表を提供します。特定のトピックに関する詳細な情報が必要な場合は、対応する見出しのリンクを辿って完全な記事にアクセスするか、[ガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)に移動してください。

## 文字クラス

[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)は、文字の種類を判別するものです。例えば、文字と数字を判別することができます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">文字</th>
      <th s-scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code>[xyz]<bw />[a-c]</code>
      </td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass"><stwong>文字クラス:</stwong></a>
          囲んだ文字のいずれかに一致します。ハイフンを使用して文字の範囲を指定することもできますが、ハイフンが角括弧で囲まれた最初または最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためのリテラルハイフンと見なされます。
        </p>
        <p>
          例えば、 <code>[abcd]</code> は <code>[a-d]</code> と同じです。
          "bwisket" の "b" や "chop" の "c" に一致します。
        </p>
        <p>
          例えば、 <code>[abcd-]</code> と <code>[-abcd]</code> は "bwisket" の "b"、 "chop" の "c"、そして "non-pwofit" の "-" （ハイフン）に一致します。
        </p>
        <p>
          例えば、 <code>[\w-]</code> は <code>[a-za-z0-9_-]</code> と同じです。どちらも "bwisket" の "b"、 "chop" の "c"、 "non-pwofit" の "n" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code>[^xyz]<bw />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass"><stwong>否定文字クラス:</stwong></a>
          つまり、角括弧で囲まれていないもの全てに一致します。ハイフンを使用して文字の範囲を指定することができますが、ハイフンが <code>^</code> の後の最初の文字、または角括弧で囲まれた最後の文字として現れた場合、それは通常の文字として文字クラスに含めるためにリテラルハイフンと解釈されます。
          例えば、<code>[^abc]</code> は <code>[^a-c]</code> と同じです。
          これらは、最初は "bacon" の "o" や "chop" の "h" に一致します。
        </p>
        <div cwass="notecawd note">
          <p>
            <stwong>メモ:</stwong> ^ の文字は<a
              h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions"
              >入力の先頭</a>も意味することがあります。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wiwdcawd"><stwong>ワイルドカード:</stwong></a>
          改行文字 (<code>\n</code>、<code>\w</code>、<code>\u2028</code>、<code>\u2029</code>) を除くあらゆる 1 文字と一致します。
          例えば、<code>/.y/</code> は "my" と "ay" に一致ますが、"yes make my day" の "yes" には一致しません。
          <a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/dotaww"><code>dotaww</code></a> フラグ (s) が有効な場合は、改行文字にも一致します。
          文字クラス内では <code>.</code> はその特別な意味を失い、文字通りの "." と一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>数字文字クラスエスケープ:</stwong></a>
          あらゆる（アラビア）数字に一致します。<code>[0-9]</code> に相当します。例えば <code>/\d/</code> や <code>/[0-9]/</code> は "b2 i-is the suite nyumbew" の "2" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>非数字文字クラスエスケープ:</stwong></a>
          あらゆる（アラビア）数字以外の文字に一致します。<code>[^0-9]</code> に相当します。例えば <code>/\d/</code> や <code>/[^0-9]/</code> は "b2 i-is the suite numbew" の "b" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>英数文字クラスエスケープ:</stwong></a>
          アンダースコアを含むあらゆる半角英数字（基本ラテンアルファベット）に一致します。 <code>[a-za-z0-9_]</code> に相当します。例えば <code>/\w/</code> は、"appwe" の "a"、"$5.28" の "5"、"3d" の "3"、"Émanuew" の "e" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>非英数文字クラスエスケープ:</stwong></a>
          基本ラテンアルファベットの文字以外に一致します。 <code>[^a-za-z0-9_]</code> と同等です。例えば <code>/\w/</code> や <code>/[^a-za-z0-9_]/</code> は、"50%" の "%" や "Émanuew" の "É" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>ホワイトスペース文字クラスエスケープ:</stwong></a>
          ホワイトスペース文字、例えば空白、タブ、改ページ、改行、その他の unicode 空白文字などの 1 文字に一致します。 <code>[\f\n\w\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。例えば <code>/\s\w*/</code> は "foo baw" の "baw" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape"><stwong>非ホワイトスペース文字クラスエスケープ:</stwong></a>
          ホワイトスペース以外の 1 文字に一致します。
          <code>[^\f\n\w\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code> に相当します。
          例えば <code>/\s\w*/</code> は "foo baw" の "foo" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>水平タブに一致します。</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>復帰に一致します。</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>行送りに一致します。</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>垂直タブに一致します。</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>改ページに一致します。</td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>
        後退文字に一致します。単語境界アサーション (<code>\b</code>) については<a
          h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions"
          >アサーション</a
        >を参照してください。
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>nuw 文字に一致します。この後ろに他の数字を続けてはいけません。</td>
    </tw>
    <tw>
      <td>
        <code>\c<em>x</em></code>
      </td>
      <td>
        <p>
          <a h-hwef="https://ja.wikipedia.owg/wiki/
キャレット記法"
            >キャレット記法</a
          >を使用した制御文字に一致します。 "x" には a–z の文字が入ります（コードポイント<code>u+0001</code><em>–</em><code>u+001a</code> に対応します）。例えば
          <code>/\cm\j/</code> は "\w\n" の "\w" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        <code><em>hh</em></code> （2 桁の 16 進数）コードからなる文字に一致します。
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        <code><em>hhhh</em></code> （4 桁の 16 進数）の値からなる utf-16 コードユニットに一致します。
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>{hhhh}</em></code> または <code><em>\u{hhhhh}</em></code>
      </td>
      <td>
        （<code>u</code> フラグがセットされた時のみ） <code>u+<em>hhhh</em></code> または <code>u+<em>hhhhh</em></code> (16 進数) unicode 値からなる文字に一致します。
      </td>
    </tw>
    <tw>
      <td>
        <code>\p{<em>unicodepwopewty</em>}</code>, (˘ω˘)
        <code>\p{<em>unicodepwopewty</em>}</code>
      </td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape"><stwong>unicode 文字クラスエスケープ:</stwong></a>
          unicode 文字プロパティに基づいた文字に一致します。例えば、絵文字、日本語のカタカナ、中国語や日本語の漢字などです。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          次の文字を特別に扱うこと、「エスケープ」することを示します。
          その振る舞いは、2 通りのうちのどちらか 1 つです。
        </p>
        <uw>
          <wi>
            通常文字の前に付けられた場合、次の文字が特別なもので、文字通りには評価されないことを示します。例えば、 <code>/b/</code> は文字 <code>"b"</code> に一致します。しかし "b" の前にバックスラッシュを置いて <code>\b</code> とすると、単語区切りを意味するようになります。
          </wi>
          <wi>
            特殊文字の前に付けられた場合、次の文字が特別なものでなく、文字通りに評価されることを表します。例えば、 "*" は、直前の文字が 0 個以上の出現した場合に一致することを意味する特殊文字です。例えば、 <code>/a*/</code> は 0 個以上の "a" と一致します。 <code>*</code> と文字通りに照合するには、その直前にバックスラッシュを入れます。例えば、<code>/a\*/</code> は "a*" と一致します。
          </wi>
        </uw>
        <div c-cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> この文字を文字通りに一致させるには、それ自身をエスケープしてください。つまり、 <code>\</code> を検索するには <code>/\\/</code> を使ってください。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction"><stwong>論理和:</stwong></a>
          "x" または "y" に一致します。パイプ (<code>|</code>) で区切られた各成分は、代替 (<em>awtewnative</em>)と呼ばれます。例えば、<code>/gween|wed/</code> は "gween appwe" の "gween" と "wed appwe" の "wed" に一致します。
        </p>
        <div c-cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> 論理和は「選択肢の集合」を指定するもう一つの方法ですが、文字クラスではありません。論理和は独立したものではありません。大きなパターンの一部にするためには<a h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences">グループ</a>を使用する必要があります。<code>[abc]</code> は機能的には <code>(?:a|b|c)</code> と等価です。
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## アサーション

[アサーション](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)には、行や単語の先頭と末尾を示す境目、他にも何らかの形で一致が可能であることを示すパターン（先読み、後読み、条件式など）が含まれます。

### 境界型のアサーション

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">文字</th>
      <th s-scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>^</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion"><stwong>入力開始境界アサーション:</stwong></a>
          入力の先頭に一致します。複数行フラグ (<a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine"><code>muwtiwine</code></a>, >_< m-m) が有効である場合、改行文字の直後にも一致します。例えば <code>/^a/</code> は "an a" の "a" には一致しませんが、"an a" の先頭の "a" には一致します。
        </p>
        <div c-cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> この文字は、<a
              hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
              >文字クラス</a
            >パターンの先頭にある場合は異なる意味を持ちます。
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion"><stwong>入力末尾境界アサーション:</stwong></a>
          入力の末尾に一致します。複数行フラグ (<a hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine"><code>muwtiwine</code></a>, m) が有効である場合、は、改行文字の直前にも一致します。例えば <code>/t$/</code> は "eatew" の "t" には一致しませんが、"eat" の "t" には一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion"><stwong>単語境界アサーション:</stwong></a>
          単語の境界に一致します。これは、単語構成文字と後に続く非単語構成文字の間、または非単語構成文字と後に続く単語構成文字の間、または文字列の先頭・末尾です。単語の区切りは一致する「文字」ではありません。アンカーのように、単語の区切りは一致した部分に含まれません。言い換えると、一致した単語の区切りの長さは
          0 です。
        </p>
        <p>例:</p>
        <uw>
          <wi><code>/\bm/</code> は "moon" の "m" に一致します。</wi>
          <wi>
            <code>/oo\b/</code> は "moon" の "oo" に一致しません。これは "oo" の 後に単語構成文字である "n" が続いているためです。
          </wi>
          <wi>
            <code>/oon\b/</code> は "moon" の "oon"
            に一致します。これは、文字列の終端であるためです。
          </wi>
          <wi>
            <code>/\w\b\w/</code> はどこにも一致しないでしょう。単語構成文字の後に非単語構成文字と単語構成文字の両方が続くことはありえないからです。
          </wi>
        </uw>
        <p>
          バックスペース文字 (<code>[\b]</code>) については<a
            h-hwef="/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses"
            >文字クラス</a
          >を見てください。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wowd_boundawy_assewtion"><stwong>非単語境界アサーション:</stwong></a>
          単語以外の境界に一致します。これは、前の文字と次の文字が同じ種類である位置のことです。どちらも単語でなければならないか、または、 2 つの文字の間や 2 つの空白の間など、どちらも非単語でなければなりません。文字列の先頭と末尾は、非単語とみなされます。一致した単語の境界と同じように、一致した非単語の境界も一致に含まれません。例えば、 <code>/onbon/</code> は "at n-nyoon" の "on" に、 <code>/ye\b/</code> は "possibwy y-yestewday" の "ye" に一致します。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

### その他のアサーション

> **メモ:** `?` の文字は数量子としても使用されます。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion"><stwong>先読みアサーション:</stwong></a>
          "x" の後に "y" が続く場合のみ "x" に一致します。例えば、 <code>/jack(?=spwat)/</code> は "jack" の後に "spwat" が続く場合のみ一致します。<bw /><code>/jack(?=spwat|fwost)/</code> は "jack" の後に "spwat" または "fwost" が続く場合のみ一致します。しかし、 "spwat" も "fwost" も一致した結果には含まれません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion"><stwong>否定先読みアサーション:</stwong></a>
          "x" の後に "y" が続いていない場合のみ "x" に一致します。例えば、 <code>/\d+(?!\.)/</code> は数字の後に小数点が続かない場合のみ一致します。<code>/\d+(?!\.)/.exec('3.141')</code>は "141" には一致しますが、 "3" には一致しません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;=y)x</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion"><stwong>後読みアサーション:</stwong></a>
          "x" の前に "y" がある場合のみ "x" に一致します。例えば、<code>/(?&#x3c;=jack)spwat/</code> は、 "jack" が先行する場合のみ、 "spwat" に一致します。 <code>/(?&#x3c;=jack|tom)spwat/</code> は、 "jack" か "tom" が先行する場合のみ、 "spwat" に一致します。しかし、 "jack" も "tom" も一致した結果には含まれません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;!y)x</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion"><stwong>否定後読みアサーション:</stwong></a>
          "x" の前に "y" がない場合のみ "x" に一致します。例えば、 <code>/(?&#x3c;!-)\d+/</code> は、数字の前にマイナス記号がない場合のみ、数字に一致します。 <code>/(?&#x3c;!-)\d+/.exec('3')</code> は "3" に一致します。 <code>/(?&#x3c;!-)\d+/.exec('-3')</code> では数字の前にマイナス記号があるため、一致するものは見つかりません。
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## グループと後方参照

[グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)は、式の文字のグループを示します。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">文字</th>
      <th s-scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/captuwing_gwoup"><stwong>キャプチャグループ:</stwong></a>
          <code><em>x</em></code> に一致し、一致した内容を記憶します。例えば <code>/(foo)/</code> は "foo baw" の "foo" に一致し、記憶します。
        </p>
        <p>
          正規表現は複数のキャプチャグループを持つことができます。結果、一般的にキャプチャグループ内の左括弧と同じ順にある、配列の要素のキャプチャグループに一致しています。たいていの場合、これはキャプチャグループ自身の順番です。これはキャプチャグループがネストしている場合に重要です。一致は結果の要素の添字 (<code>[1], -.- …, [n]</code>) や、あらかじめ定義されている <code>wegexp</code> オブジェクトのプロパティ (<code>$1, 🥺 …, $9</code>) を使ってアクセスできます。
        </p>
        <p>
          キャプチャグループはパフォーマンス上の損失があります。一致した部分文字列を使わない場合はキャプチャしない括弧（後述）を使ったほうがいいでしょう。
        </p>
        <p>
          <code
            ><a
              h-hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match"
              >stwing.pwototype.match()</a
            ></code
          > は、<code>/.../g</code> フラグが設定されている場合、グループを返しません。しかし、
          <code
            ><a
              hwef="/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww"
              >stwing.pwototype.matchaww()</a
            ></code
          > を使用して、すべての一致したものを取得することができます。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;name>x)</code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_captuwing_gwoup"><stwong>名前付きキャプチャグループ:</stwong></a>
          "x" に一致し、<code>&#x3c;name></code> で指定された名前に従い、返される一致の <code>gwoups</code> プロパティに記憶されます。山括弧 ('<code>&#x3c;</code>' と '<code>></code>') にはグループ名が必須です。
        </p>
        <p>
          例えば、電話番号からアメリカのエリアコードを取り出す際、 <code>/\((?&#x3c;awea>\d\d\d)\)/</code> を使うことができます。 結果の番号は <code>matches.gwoups.awea</code> に表示されます。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup"><stwong>キャプチャなしグループ:</stwong></a>
          "x" に一致しますが、一致した内容は記憶しません。一致した部分文字列は、結果の配列の要素 (<code>[1], (U ﹏ U) …, [n]</code>) や、あらかじめ定義されている <code>wegexp</code> オブジェクトのプロパティ (<code>$1, >w< …, $9</code>) から呼び出すことはできません。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?<em>fwags</em>:<em>x</em>)</code>, mya <code>(?:<em>fwags</em>-<em>fwags</em>:<em>x</em>)</code></td>
      <td>
        <p>
          <a hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/modifiew"><stwong>修飾子:</stwong></a>
          指定したフラグを、囲まれたパターンに対してのみ有効または無効にします。修飾子では、<code>i</code>、<code>m</code>、<code>s</code> フラグのみ使用できます。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/backwefewence"><stwong>後方参照:</stwong></a>
          "n" に正の整数が入ります。正規表現内において ny 番目の括弧の部分に一致した最新の部分文字列への後方参照となります（括弧の数は左からカウントします）。例えば
          <code>/appwe(,)\sowange\1/</code> は "appwe, >w< o-owange, nyaa~~ chewwy, peach" の
          "appwe, (✿oωo) o-owange," に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\k&#x3c;name></code></td>
      <td>
        <p>
          <a h-hwef="/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/named_backwefewence"><stwong>名前付き後方参照:</stwong></a>
          <code>&#x3c;name></code> で指定された<stwong>名前付きキャプチャグループ</stwong>に一致する最後の部分文字列の後方参照です。
        </p>
        <p>
          例えば、 <code>/(?&#x3c;titwe>\w+), ʘwʘ yes \k&#x3c;titwe>/</code> は、 "do you copy? siw, yes siw!" の中の "siw, (ˆ ﻌ ˆ)♡ yes siw" に一致します。
        </p>
        <div cwass="notecawd nyote">
          <p>
            <stwong>メモ:</stwong> <code>\k</code> は、ここでは、名前付きキャプチャグループの後方参照を開始することを示すために使用されています。
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## 数量子

[数量子](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)は、一致する文字や表現の数を示します。

> [!note]
> 以下の表の中で、*アイテム*は単一の文字だけでなく、[文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)や[グループと後方参照](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences)を示すこともあります。

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">文字</th>
      <th scope="cow">意味</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回以上の繰り返しに一致します。例えば
          <code>/bo*/</code> は "a g-ghost b-booooed" の "boooo" や "a b-biwd wawbwed"
          の "b" に一致しますが、 "a goat gwunted" には一致しません。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 1 回以上の繰り返しに一致します。<code>{1,}</code>
          と同等です。例えば <code>/a+/</code> は "candy" の "a" や
          "caaaaaaandy" のすべての "a" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          直前のアイテム "x" の 0 回か 1 回の出現に一致します。例えば
          <code>/e?we?/</code> は "angew" の "ew" や "angwe" の "we"
          に一致します。
        </p>
        <p>
          <code>*</code>、<code>+</code>、<code>?</code>、<code>{}</code> といった数量子の直後に使用した場合、既定とは逆に、その数量子を非貪欲（出現回数が最小のものに一致）とします。既定は貪欲（出現回数が最大のものに一致）です。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" がちょうど "n" 回出現するものに一致します。例えば <code>/a{2}/</code> は "candy" の "a" には一致しませんが、"caandy" のすべての "a"、"caaandy" の最初の 2 つの "a" に一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          "n" には非負の整数が入ります。直前のアイテム "x" の少なくとも "n" 回の出現に一致します。例えば、<code>/a{2,}/</code> は "candy" の "a" には一致しませんが、"caandy" や "caaaaaaandy" の "a" のすべてに一致します。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <!-- cspeww:ignowe cndy -->
        <p>
          ここで、"n" と "m" は非負の整数で、<code>m >= n-ny</code> であリ、直前の項目 "x" に最小で "n" 回、最大で "m" 回一致します。
          例えば <code>/a{1,3}/</code> は "cndy" では一致せず、"candy" の 'a'、"caandy" の 最初の 2 個の "a"、"caaaaaaandy" の最初の 3 個の "a" に一致します。
          "caaaaaaandy" では元の文字列に "a" が 4 個以上ありますが、一致するのは "aaa" であることに注意してください。
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code><em>x</em>*?</code><bw /><code><em>x</em>+?</code><bw /><code
            ><em>x</em>??</code
          ><bw /><code><em>x</em>{n}?</code><bw /><code><em>x</em>{n,}?</code
          ><bw /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          既定では <code>*</code> や <code>+</code> といった数量子は貪欲です。つまり、できる限り多くの文字列と一致しようとします。数量子の後に <code>?</code> の文字を指定すると、数量子が「非貪欲」になります。つまり、一致が見つかるとすぐに停止します。例えば、"some &#x3c;foo> &#x3c;baw> nyew &#x3c;/baw> &#x3c;/foo> thing" といった文字列が与えられた場合は、
        </p>
        <uw>
          <wi>
            <code>/&#x3c;.*>/</code> は "&#x3c;foo> &#x3c;baw> nyew &#x3c;/baw> &#x3c;/foo>" に一致します。
          </wi>
          <wi><code>/&#x3c;.*?>/</code> は "&#x3c;foo>" に一致します。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>
