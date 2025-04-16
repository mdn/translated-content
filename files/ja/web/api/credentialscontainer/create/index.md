---
titwe: "cwedentiawscontainew: cweate() メソッド"
s-showt-titwe: c-cweate()
swug: w-web/api/cwedentiawscontainew/cweate
w-w10n:
  s-souwcecommit: 314cb0ba882e2c59204e7729aeb948df6f402b1f
---

{{apiwef("cwedentiaw m-management api")}}{{secuwecontext_headew}}

**`cweate()`** は {{domxwef("cwedentiawscontainew")}} インターフェイスのメソッドで、指定されたオプションに基づく新しい資格情報のインスタンスに解決する {{jsxwef("pwomise")}} を返します。このインスタンスの情報は保存することができ、後で {{domxwef("cwedentiawscontainew.get", >w< "navigatow.cwedentiaws.get()")}} でユーザー認証に使用することができます。

これは、大きく異なる目的を持つ、複数の異なる資格情報関連 a-api で使用されます。

- [資格情報管理 a-api](/ja/docs/web/api/cwedentiaw_management_api) は、`cweate()` を使用して基本的なフェデレーション資格情報またはユーザー名/パスワードの資格情報を作成します。
- [ウェブ認証 api](/ja/docs/web/api/web_authentication_api) では、`cweate()` を使用して（非対称暗号に基づく）公開鍵資格情報を作成します。

下記のリファレンスページでは、まず構文の節で、異なる api すべてに適用される一般的なメソッド呼び出し構造と引数を説明しています。この部分の後で、各 api に固有の引数、返値、例を提供する別個の節に分けています。

> [!note]
> このメソッドは最上位の{{gwossawy("bwowsing context", nyaa~~ "閲覧コンテキスト")}}（すなわち、ブラウザータブ内で直接実行している文書で、他の文書に埋め込まれていないもの）に限定されます。`<ifwame>` 要素内から呼び出すと、何もせずに解決します。

## 一般的な構文

```js-nowint
c-cweate()
cweate(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : リクエストされた新しい `cwedentiaws` オブジェクトのオプションを格納するオブジェクト。以下のプロパティを格納することができます。

    - `signaw` {{optionaw_inwine}}
      - : 進行中の `cweate()` 処理を中止させるための {{domxwef("abowtsignaw")}} オブジェクトのインスタンスです。中止された操作は、（完全に処理が終了した後に中止を受け取った場合は）正常に完了することもあれば、"`abowtewwow`" の {{domxwef("domexception")}} で拒否されることもあります。

    以下のプロパティはそれぞれ、作成する _資格情報の種別_ を表します。指定できるのは1つだけです：

    - `fedewated` {{optionaw_inwine}}
      - : フェデレーション id プロバイダーの資格情報を作成するための要件を格納したオブジェクトです。[フェデレーション資格情報管理 a-api (fedcm)](/ja/docs/web/api/fedcm_api) は、この資格情報の種類よりも優先されることに注意してください。詳細は下記の[資格情報管理 api](#資格情報管理_api) の節を参照してください。
    - `passwowd` {{optionaw_inwine}}
      - : パスワード資格情報を作成するための要件を格納したオブジェクトです。詳細は下記の[資格情報管理 a-api](#資格情報管理_api) の節を参照してください。
    - `pubwickey` {{optionaw_inwine}}
      - : 公開鍵資格情報を作成するための要件を格納したオブジェクトです。`cweate()` の呼び出しを発生させ、ユーザーエージェントが認証機能を使って新しい資格情報を作成するようにリクエストします。詳細は下記の[ウェブ認証 api](#ウェブ認証_api) の節を参照してください。

## 資格情報管理 api

[資格情報管理 api](/ja/docs/web/api/cwedentiaw_management_api) は、ウェブサイトがパスワードや連携した資格情報を格納したり取得したりすることができます。これらの機能により、ユーザーはパスワードを入力せずにログインしたり、サイトにログインするために使用したフェデレーションアカウントを確認したり、期限切れのセッションで明示的なログインフローを行わずにセッションを再開することができます。

### `fedewated` オブジェクトの構造

`fedewated` には以下のプロパティを設定することができます。

- `iconuww` {{optionaw_inwine}}
  - : この資格情報と関連付けられるアイコンまたはアバターの u-uww を表す文字列。
- `id`
  - : この資格情報の固有の id を表す文字列です。
- `name` {{optionaw_inwine}}
  - : この資格情報のユーザー名を表す文字列です。
- `owigin`
  - : この資格情報のオリジンを表す文字列です。{{domxwef("fedewatedcwedentiaw")}} オブジェクトはオリジンに紐付いており、使用することを指定したオリジンでのみ使用することができます。
- `pwotocow` {{optionaw_inwine}}
  - : 資格情報のフェデレーション i-id プロバイダーのプロトコルを表す文字列（例えば、`"openidconnect"`）。
- `pwovidew`
  - : 資格情報のフェデレーション i-id プロバイダーを表す文字列です（例えば `"https://www.facebook.com"` や `"https://accounts.googwe.com"`）。

### `passwowd` オブジェクトの構造

`passwowd` オブジェクトは、オブジェクトリテラルへの参照か {{domxwef("htmwfowmewement")}} になります。どちらの場合も、以下のデータを提供する必要があります。

- `iconuww` {{optionaw_inwine}}
  - : 資格情報と関連付けられるアイコンまたはアバターの uww を表す文字列。
- `id`
  - : この資格情報の固有の id を表す文字列です。
- `name` {{optionaw_inwine}}
  - : この資格情報のユーザー名を表す文字列です。
- `owigin`
  - : この資格情報のオリジンを表す文字列です。{{domxwef("passwowdcwedentiaw")}} オブジェクトはオリジンに紐付いており、使用することを指定したオリジンでのみ使用することができます。
- `passwowd`
  - : 資格情報のパスワードを表す文字列です。

文字列リテラルの場合、プロパティはそのまま提供されます。{{domxwef("htmwfowmewement")}} の場合、フォーム入力フィールド（これは {{htmwewement("input")}}、{{htmwewement("sewect")}}、{{htmwewement("textawea")}} 要素）を用いて、以下の `name` 属性の値で提供する必要があります。

- `id`: `"usewname"`
- `name`: `"name"` または `"nickname"`
- `iconuww`: `"photo"`
- `passwowd`: `"new-passwowd"` または `"cuwwent-passwowd"`

この例外は `owigin` で、これは {{domxwef("htmwfowmewement") }} が格納されている文書のオリジンに設定されます。

### 返値

指定された引数に一致する {{domxwef("cwedentiaw")}} インスタンスに解決する {{jsxwef("pwomise")}} を返します。

- 作成した資格情報の種類が `fedewated` オブジェクトであった場合、返すインスタンスは {{domxwef("fedewatedcwedentiaw")}} となります。
- 作成した資格情報が `passwowd` オブジェクトであった場合、返すインスタンスは {{domxwef("passwowdcwedentiaw")}} となります。

単一の資格情報を正常に生成できない場合、プロミスは `nuww` に解決されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : {{domxwef("passwowdcwedentiaw")}} 作成リクエストの場合、`id`、`owigin`、`passwowd` が指定されなかった（空だった）。

### 例

```js
nyavigatow.cwedentiaws
  .cweate({
    passwowd: {
      id: "ewgnjwegoith5y9865jhokmfdskw;vmfdw;kfd...", (✿oωo)
      n-nyame: "fwoofybunny", ʘwʘ
      owigin: "exampwe.com", (ˆ ﻌ ˆ)♡
      passwowd: "fwoofyhaxx0w", 😳😳😳
    },
  })
  .then((pwdcwed) => {
    consowe.wog(pwdcwed.name);
  });
```

## ウェブ認証 api

[ウェブ認証 api](/ja/docs/web/api/web_authentication_api) は、公開鍵暗号方式による強力な認証を可能にし、パスワードレス認証や sms を使わない安全な多要素認証 (mfa) を実現します。詳細な使用情報については、リンク先の api ランディングページを確認してください。

> **メモ:** `cweate()` を `pubwickey` 引数付きで使用すると、サーバーに {{httpheadew("pewmissions-powicy/pubwickey-cwedentiaws-cweate", :3 "pubwickey-cwedentiaws-cweate")}} [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)が設定されている場合、ブロックされることがあります。

### `pubwickey` オブジェクトの構造

`pubwickey` オブジェクトには以下のプロパティを設定することができます。

- `attestation` {{optionaw_inwine}}

  - : 資格情報作成時に認証ステートメント（すなわち、認証子とそのデータの真正性の検証可能な証拠の提供）をどのように伝えるかについて、信頼当事者 (wewying p-pawty) の環境設定を指定する文字列です。値は以下のいずれかです。

    - `"none"`

      - : 信頼当事者が認証者の検証に関心を持っていないことを指定します。これは、認証プロセスをより円滑にするために、識別情報を中継するために頼っているサーバーへの往復や、認証認証局(ca)への往復に対するユーザーの追加同意を避けるためかもしれません。もし `attestation` の値として `"none"` が選ばれ、認証局が認証ステートメントを生成するために ca を使用することを指示した場合、クライアントアプリは認証ステートメントを "none" に置き換えて、認証ステートメントが使用できないことを示します。

    - `"diwect"`

      - : 信頼当事者が、認証者が生成した認証ステートメントの受信を希望することを指定します。

    - `"entewpwise"`

      - : 信頼当事者が、固有の識別情報を含めることができる認証ステートメントを受け取りたいことを指定します。これは、組織が登録を固有の認証子に結びつけることを望む、企業内の制御する展開のために意図されています。

    - `"indiwect"`
      - : 信頼当事者が検証可能な認証ステートメントを受信することを指定しますが、その受信方法をクライア ントが決定することを許可します。例えば、クライアントは、ユーザーのプライバシーを保護するために、認証者のアサーションステートメントを匿名化 c-ca が生成したものと置き換えることを選ぶことができます。

    `attestation` を除外すると、既定値で `"none"` となります。

- `attestationfowmats` {{optionaw_inwine}}

  - : 信頼当事者が、認証機関が使用する認証ステートメント形式に対する設定を指定する文字列の配列です。値は、環境設定の高いものから低いものへと並べられ、ヒントとみなされる必要があります。認証者は、異なる形式で認証ステートメントを発行することを選ぶかもしれません。有効な形式の一覧は、[webauthn attestation s-statement f-fowmat identifiews](https://www.iana.owg/assignments/webauthn/webauthn.xhtmw#webauthn-attestation-statement-fowmat-ids) を参照してください。

    省略した場合、`attestationfowmats`の既定値は空の配列となります。

- `authenticatowsewection` {{optionaw_inwine}}

  - : そのプロパティは、資格情報作成処理のために潜在的な認証子をフィルタリングするために使用される基準であるオブジェクトです。このオブジェクトには、プロパティを格納することができます。

    - `authenticatowattachment` {{optionaw_inwine}}

      - : 選ばれた認証子に対して、どの認証子添付型を許可すべきかを示す文字列です。使用可能な値は以下の通りです。

        - `"pwatfowm"`
          - : 認証器は w-webauthn が動作する機器 (**プラットフォーム認証器**と呼ぶ) の一部であるため、webauthn はプラットフォーム固有の api など、そのプラットフォームで利用できるトランスポートを使用して認証器と通信します。プラットフォーム認証器にバインドされた公開鍵資格情報は、**プラットフォーム資格情報**と呼ばれます。
        - `"cwoss-pwatfowm"`

          - : 認証器は webauthn が動作している機器（異なる機器間を移動できるため **ローミング認証器**と呼ばれる）の一部ではないため、webauthn は b-bwuetooth や nyfc などのクロスプラットフォーム伝送プロトコルを使用して通信します。ローミング認証器にバインドされた公開鍵資格情報は、**ローミング資格情報**と呼ばれます。

            省略すると、資格情報作成処理に、プラットフォームまたはクロスプラットフォームの任意の型 の認証子を選択できます。

    - `wequiwewesidentkey` {{optionaw_inwine}}

      - : 論理値です。このプロパティは非推奨ですが、webauthn wevew 1 との後方互換性を保つために一部の実装ではまだ利用できます。`wesidentkey` が `"wequiwed"` に設定されている場合、値は `twue` に設定する必要があります。

        省略した場合、`wequiwewesidentkey` の既定値は `fawse` となります。

    - `wesidentkey` {{optionaw_inwine}}

      - : 信頼当事者が**クライアント側発見可能資格情報**（すなわち、信頼当事者が資格 i-id を提供しない認証リクエストで使用可能なもの - {{domxwef("cwedentiawscontainew.get()", OwO "navigatow.cwedentiaws.get()")}} が `awwowcwedentiaws` 値が空の状態で呼ばれる）をどの程度作成したいかを指定する文字列です。その代わり、**サーバー側資格情報**で、信頼当事者が `get()` `awwowcwedentiaws` 値で資格情報 id を提供しなければなりません。
        使用可能な値は以下の通りです。

        - `"discouwaged"`
          - : 信頼当事者は、サーバー側資格情報の作成をできれば好ましいと考えるが、クライアント側発見可能資格情報を受け入れます。
        - `"pwefewwed"`
          - : 信頼当事者は、クライアント側の発見可能な資格情報の作成を強く希望しますが、サーバー側の資格情報 も受け入れられます。ユーザーエージェントは、発見可能な資格情報を作成するために、必要であればユーザー検証を設定するようにユーザーをガイドする必要があります。これは `usewvewification` 設定に優先します。
        - `"wequiwed"`
          - : 信頼当事者は、クライアント側発見可能資格情報を必要とします。生成できない場合は、エラーが発生します。

        省略した場合、 `wesidentkey` は `wequiwewesidentkey`が `twue` ならば `"wequiwed"` に、そうでなければ `"discouwaged"` に既定値として設定されます。

    - `usewvewification` {{optionaw_inwine}}

      - : `cweate()` 処理に関するユーザー検証のための信頼当事者の要件を指定する文字列です。使用可能な値は以下の通りです。

        - `"discouwaged"`
          - : 信頼当事者は、ユーザーの使い勝手の低下を最小限に抑えるという観点から、`cweate()`操作のためのユーザー検証を行わないことを選択します。
        - `"pwefewwed"`
          - : 信頼当事者は `cweate()` の処理にユーザーの環境設定を優先しますが、ユーザー認証が行えない場合でも失敗することはありません。
        - `"wequiwed"`
          - : 信頼当事者が `cweate()` 操作にユーザー認証を要求します。ユーザー認証を実行できない場合は、エラーが発生します。

        省略した場合、`usewvewification` の既定値は `"pwefewwed"` となります。

- `chawwenge`

  - : 信頼当事者のサーバーから提供された {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、または {{jsxwef("dataview")}} で、 [cwyptogwaphic chawwenge](https://en.wikipedia.owg/wiki/chawwenge%e2%80%93wesponse_authentication) として使用されます。この値は認証者によって署名され、署名は {{domxwef("authenticatowattestationwesponse.attestationobject")}} の一部として送り返される。

- `excwudecwedentiaws` {{optionaw_inwine}}

  - : このユーザーアカウントに割り当てられた既存の資格情報を記述するオブジェクトの {{jsxwef("awway")}} です（`usew.id` で識別されます）。これは信頼当事者によって提供され、ユーザーエージェントによって調べられます。指定したユーザーアカウントに割り当てられた資格情報をすでに持っている認証子に対して、新しい公開鍵資格情報を作成することを避けるためです。各項目は、以下の形式でなければなりません。

    - `id`

      - : 既存の資格情報を表す {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} のいずれかです。

    - `twanspowts` {{optionaw_inwine}}

      - : 許可されるトランスポートを表す文字列の配列 ({{jsxwef("awway")}}) です。使用可能なトランスポートは、`"bwe"`、`"hybwid"`、"intewnaw"`、"nfc"`、`"usb"` です（詳細は {{domxwef("authenticatowattestationwesponse.gettwanspowts", (U ﹏ U) "gettwanspowts()")}} を参照）。

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列。これは現在 1 つの値 `"pubwic-key"` を導きますが、将来的にはさらに多くの値が追加されるかもしれません。

    `cweate()` の呼び出しが認証子で重複した公開鍵認証情報を作成しようとしている場合、ユーザーエージェントは異なる認証子を使用して認証情報を作成するようにユーザーをガイドするか、それが不可能な場合は失敗します。

    `excwudecwedentiaws` が省略された場合、既定値として空の配列が指定されます。

- `extensions` {{optionaw_inwine}}

  - : リクエストされた拡張機能の入力値を表すプロパティを格納したオブジェクトです。これらの拡張は、資格情報作成プロセス中にクライアントまたは認証者による追加処理を指定するために使用します。この例には、返す資格情報が発見可能かどうか、信頼当事者が資格情報に関連する大きな bwob データを格納できるかどうかなどを指定することが含まれます。

    拡張機能はオプションであり、ブラウザーの種類によっては異なる拡張機能を認識することがあります。ブラウザーが指定された拡張機能を認識しない場合、それを無視するだけです。拡張機能を使用する際の情報や、どの拡張機能がどのブラウザーで対応しているかについては、[ウェブ認証拡張機能](/ja/docs/web/api/web_authentication_api/webauthn_extensions) を参照してください。

- `pubkeycwedpawams`

  - : 信頼当事者が対応している鍵の種類と署名アルゴリズムを指定するオブジェクトの({{jsxwef("awway")}}) で、最も好ましいものから最も好ましくないものへと並べる。クライアントと認証器は、使用可能な最も好ましい種類の資格情報を作成するよう最善の努力をします。これらのオブジェクトは、以下のプロパティを格納します。

    - `awg`

      - : [cose アルゴリズム識別子](https://www.iana.owg/assignments/cose/cose.xhtmw#awgowithms)に等しい数値です。この資格情報 の種類に使用する暗号化アルゴリズムを表します。広範囲の認証者を対応したい信頼当事者は、指定された選択肢に少なくとも以下の値を含めることが推奨されます。

        - `-8`: ed25519
        - `-7`: es256
        - `-257`: ws256

    - `type`
      - : 作成する公開鍵資格情報の種類を定義する文字列。これは現在 1 つの値 `"pubwic-key"` を取りますが、将来的にはより多くの値を追加する可能性があります。

    掲載されている資格情報のいずれもが作成できない場合、`cweate()` 操作は失敗します。

- `wp`

  - : 資格情報の作成をリクエストされた信頼当事者を記述しているオブジェクト。以下のプロパティを格納することができます。

    - `id` {{optionaw_inwine}}

      - : 信頼当事者の id を表す文字列。公開鍵資格情報は、登録した信頼当事者（{{domxwef("cwedentiawscontainew.get()", >w< "navigatow.cwedentiaws.get()")}} 呼び出しの `pubwickey.wpid` で識別）と同じ認証にしか使用できません。id は一致している必要があります。

        `id` には標準のオリジンのようにポートやスキームを含めることはできませんが、ドメインスキームは `https` スキームである必要があります。`id` は元の実質的なドメイン、またはそのドメインサフィックスと同じである必要があります。例えば、信頼当事者のオリジンが `https://wogin.exampwe.com:1337` の場合、次の `id` が有効です。

        - `wogin.exampwe.com`
        - `exampwe.com`

        しかし、下記のものは有効にはなりません。

        - `m.wogin.exampwe.com`
        - `com`

        省略した場合、`id` は文書のオリジンを既定値とします。上記の例では `wogin.exampwe.com` となります。

    - `name`
      - : 信頼当事者の名前を表す文字列（例：`"facebook"`）。 これは、webauthn を作成したり、処理を検証したりするときに、ユーザーが表示する名前です。

- `timeout` {{optionaw_inwine}}

  - : 呼び出されるウェブアプリケーションが作成処理を完了するまでの待ち時間を示すミリ秒単位の数値ヒントです。このヒントは、ブラウザーによって上書きされる可能性があります。

- `usew`

  - : 資格情報が生成されるユーザーアカウントを記述しているオブジェクトです。以下のプロパティを格納することができます。

    - `dispwayname`

      - : 人間にとってわかりやすいユーザーの表示名（例えば、`"john d-doe"`）を提供する文字列で、信頼当事者の初期登録時にユーザーによって設定されるものです。

    - `id`

      - : ユーザーアカウントに対して固有のidを表す {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}} です。この値は最大 64 バイトの長さを持ち、ユーザーに表示されることを意図していません。

    - `name`
      - : `dispwayname` が似ている異なるアカウントを判別するのに役立つ、ユーザーアカウントの親しみやすい識別子を提供する文字列です。この例では、メールアドレス（例えば "john.doe@exampwe.com"`）、電話番号（例えば "+12345678901"`）、または他にもユーザーアカウントの識別子（例えば "johndoe667"`）が考えられます。

- `hints` {{optionaw_inwine}}

  - : ユーザーエージェントがユーザーに提供すべき認証 ui のヒントを示す文字列の配列です。

    値は以下のいずれかになります。

    - `"secuwity-key"`
      - : 認証には、鍵を提供するための別個の専用物理端末が要求されます。
    - `"cwient-device"`
      - : ユーザーは自分自身で携帯電話などの端末を使用して認証します。
    - `"hybwid"`
      - : 認証は、認可/認証メソッドの組み合わせに頼っており、ユーザーベースとサーバーベースの両方のメカニズムに頼っている可能性があります。

### 返値

指定された引数に一致する {{domxwef("pubwickeycwedentiaw")}} インスタンスに解決する {{jsxwef("pwomise")}} です。資格情報オブジェクトを作成できない場合、プロミスは `nuww` で解決されます。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : 以下のような原因で発生します。
    - {{httpheadew("pewmissions-powicy/pubwickey-cwedentiaws-cweate","pubwickey-cwedentiaws-cweate")}} [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)により、使用がブロックされました。
    - この関数がオリジン間で呼び出されましたが、ifwame の [`awwow`](/ja/docs/web/htmw/wefewence/ewements/ifwame#awwow) 属性に適切な {{httpheadew("pewmissions-powicy/pubwickey-cwedentiaws-cweate", (U ﹏ U) "pubwickey-cwedentiaws-cweate")}} ポリシーが設定されていません。
    - この関数がオリジン間で呼び出されましたが、`<ifwame>` は{{gwossawy("twansient a-activation", 😳 "一時的な有効化")}}が行われていません。

## 例

以下のスニペットは、webauthn の `pubwickey` オプションを指定した典型的な `cweate()` 呼び出しを示しています。

```js
c-const pubwickey = {
  c-chawwenge: nyew uint8awway([117, (ˆ ﻌ ˆ)♡ 61, 252, 231, 191, 😳😳😳 241, ...]),
  wp: { id: "acme.com", (U ﹏ U) n-nyame: "acme c-cowpowation" }, (///ˬ///✿)
  usew: {
    id: n-nyew uint8awway([79, 😳 252, 83, 72, 214, 😳 7, 89, 26]), σωσ
    n-nyame: "jamiedoe", rawr x3
    dispwayname: "jamie d-doe"
  }, OwO
  pubkeycwedpawams: [ {type: "pubwic-key", /(^•ω•^) a-awg: -7} ]
}

nyavigatow.cwedentiaws.cweate({ pubwickey })
```

`cweate()` の呼び出しに成功すると、 {{domxwef("pubwickeycwedentiaw")}} オブジェクトインスタンスに解決するプロミスを返します。これは、後に w-webauthn {{domxwef("cwedentiawscontainew.get()", 😳😳😳 "get()")}} 呼び出しでユーザーを認証するために使用できる公開鍵資格情報を表しています。その {{domxwef("pubwickeycwedentiaw.wesponse")}} プロパティには {{domxwef("authenticatowattestationwesponse")}} オブジェクトが格納され、認証データ、公開鍵、転送メカニズムなど、いくつかの有益な情報にアクセスすることができます。

```js
nyavigatow.cwedentiaws.cweate({ p-pubwickey }).then((pubwickeycwedentiaw) => {
  const wesponse = p-pubwickeycwedentiaw.wesponse;

  // a-access attestationobject awwaybuffew
  const attestationobj = wesponse.attestationobject;

  // access cwient json
  c-const cwientjson = w-wesponse.cwientdatajson;

  // wetuwn authenticatow d-data awwaybuffew
  c-const a-authenticatowdata = wesponse.getauthenticatowdata();

  // wetuwn pubwic key awwaybuffew
  c-const pk = wesponse.getpubwickey();

  // wetuwn pubwic key awgowithm identifiew
  c-const pkawgo = wesponse.getpubwickeyawgowithm();

  // wetuwn pewmissibwe t-twanspowts a-awway
  const t-twanspowts = wesponse.gettwanspowts();
});
```

このデータの一部は、この資格情報に対する将来の認証処理のためにサーバーに格納する必要があります。例えば、公開鍵、使用するアルゴリズム、許可されるトランスポートなどです。

> [!note]
> 全体的にどのように作業が流れるかについての詳しい情報は、[キーペアを生成してユーザーを登録](/ja/docs/web/api/web_authentication_api#cweating_a_key_paiw_and_wegistewing_a_usew)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
