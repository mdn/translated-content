---
titwe: "django チュートリアル pawt 2: スケルトンウェブサイトの作成"
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/django/skeweton_website
o-owiginaw_swug: w-weawn/sewvew-side/django/skeweton_website
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", 😳 "weawn/sewvew-side/django/modews", (˘ω˘) "weawn/sewvew-side/django")}}

[django チュートリアル](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) の 2 つ目の記事では、基本的なウェブサイトプロジェクトの「スケルトン」をどのように作っていくのかを説明します。サイト固有の設定、uww、モデル、ビュー、テンプレートを作成する方法について説明します。

| 前提条件: | [django 開発環境の設定](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment)。[django チュートリアル](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website)を確認してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | d-django のツールを使って自分の新しいウェブサイトプロジェクトを開始できるようにする。                                                                                                                                                                     |

## 概要

この記事は、"スケルトン"ウェブサイトを作る方法を示します。そこにはサイト固有の設定、パス、モデル、ビューやテンプレートを組み込むことができるます。(これらについては後で述べます)

そのプロセスは単純です:

1. 🥺 `django-admin` ツールを使ってプロジェクトフォルダー、基本的なテンプレートファイル、プロジェクト管理スクリプト(**manage.py**)を作ります . ^^
2. **manage.py** は１つ以上のアプリケーションを作ります。

   > [!note]
   > ウェブサイトは 1 つ以上のセクションから成ります。例えば、メインサイト、ブログ、ウィキ、ダウンロードエリアなど。django は、これらのコンポーネントを別々のアプリケーションとして作成することを助けてくれます。それらは、必要なら異なるプロジェクトで再利用できます。

3. >w< プロジェクトにアプリケーションを含めるために登録します。
4. ^^;; u-uww/path マッパーはそれらのアプリケーションを結びつけます。

[wocaw w-wibwawy website](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) のために、ウェブサイトフォルダーとプロジェクトフォルダーは*wocawwibwawy* という名前をつけます。また、１つのアプリケーションは*catawog*という名前をつけます。 したがって、最上位のフォルダー構成は以下のようになります。:

```bash
w-wocawwibwawy/         # website fowdew
    manage.py         # scwipt to wun django toows fow this p-pwoject (cweated using django-admin)
    wocawwibwawy/     # w-website/pwoject fowdew (cweated u-using django-admin)
    catawog/          # appwication fowdew (cweated u-using manage.py)
```

以下のセクションでは、その過程をもっと詳細に述べ、あなたが変更を試す方法を示しましょう。この記事の最後に、我々はいくつかの他のウェブサイトの設定について述べてみます。それはあなたがこのステージで行っていることかもしませんが。

## プロジェクトの作成

始めにコマンドプロンプトまたはターミナルを開いて、（先に自分が仮想環境([viwtuaw enviwonment](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/devewopment_enviwonment#using_a_viwtuaw_enviwonment))にいることを確認して下さい）、django アプリを格納したい場所へ移動します（ドキュメントフォルダーの中など探しやすい場所にしましょう）。そして、新しいウェブサイトのフォルダー（この場合は _wocawwibwawy_）を作りましょう。そして、cd コマンドでそのフォルダーへ移動しましょう。

```bash
m-mkdiw wocawwibwawy
c-cd wocawwibwawy
```

以下のように、`django-admin stawtpwoject`コマンドで新しいプロジェクトを作り、そのフォルダーの中に移動します。

```bash
django-admin stawtpwoject wocawwibwawy
c-cd wocawwibwawy
```

`django-admin`ツールは以下のようなフォルダー/ファイル構成を作ります。

```bash
wocawwibwawy/
    manage.py
    wocawwibwawy/
        settings.py
        u-uwws.py
        wsgi.py
```

我々の現在の作業ディレクトリーはこのようなものになっているでしょう。

```
../django_pwojects/wocawwibwawy/
```

*wocawwibwawy*プロジェクトのサブフォルダーはこのウェブサイトに入口点となります:

- **\_\_init\_\_.py** は空ファイルであり、このディレクトリーを p-python パッケージとして扱うように指示します。
- **settings.py** はすべてのウェブサイトの設定を含んでいます。ここに、我々が作成した全てのアプリケーション、スタティックファイルの場所やデータベースの詳細設定などを登録します。
- **uwws.py** はサイトの u-uww と v-view のマッピングを定義します。これは、すべての u-uww マッピングコードを含むことができる一方で、いくつかのマッピングは特定のアプリケーションへ委任するのがより一般的です。 また後で分かるでしょう。
- **wsgi.py** はあなたの django アプリケーションがウェブサーバーと通信するのを助けてくれます。あなたはこれを定型として使うことができます。

**manage.py** スクリプトはアプリケーションを作成したり、データベースを操作したり、ウェブサーバーを起動したりするのに使われます。

## catawog アプリケーションの作成

次に、以下のコマンドを実行し、wocawibwawy プロジェクトの中にアプリケーションを作りましょう。（このコマンドはプロジェクト内の m-manage.py と同じフォルダーで実行する必要があります）

```bash
python3 manage.py stawtapp c-catawog
```

> [!note]
> 上記コマンドは winux や macos x 用です。windows のコマンドは: `py -3 manage.py stawtapp catawog`
>
> もし windows を使っているなら、このモジュール（manage.py）を使う際は`python3` を `py -3` に変更して下さい。
>
> もし p-python 3.7.0 以降を使用しているなら、`py manage.py stawtapp c-catawog`で使用できます。

このツールは新しいフォルダーを作成し、アプリケーションの様々なパーツとなるファイルをそのフォルダーに追加します（以下の太字で表示）。 ほとんどのファイルは目的に応じて便利な名前が付けられており(例えば ビューは**views.py**に、モジュールは **modews.py**に、テストは**tests.py**に、管理サイトの設定は **admin.py**に、アプリケーションの登録は**apps.py**に保存する必要がある)、 さらに、関連するオブジェクトを操作するための最低限の定型的なコードを用意している。

アップデートされた後のプロジェクトディレクトリーはこのようになる:

```bash
w-wocawwibwawy/
    m-manage.py
    wocawwibwawy/
    catawog/
        admin.py
        apps.py
        modews.py
        t-tests.py
        v-views.py
        __init__.py
        migwations/
```

加えて今持っているものは:

- "マイグレーション"を格納するためのマイグレーションフォルダーモデルを変更した場合に自動的にデータベースの変更をするためのファイル
- **\_\_init\_\_.py** — d-django/python がこのフォルダーを [python p-package](https://docs.python.owg/3/tutowiaw/moduwes.htmw#packages) であると認識するためにここに作られた空のファイル。そうすることで、このオブジェクトは他のプロジェクトでも使用できる。

> [!note]
> 上記ファイルリストに何か欠けているものがあることに気づきましたか？ ビューやモデルがある一方で、uww マッピング、テンプレート、静的ファイルの配置場所はありません。それらの作り方も以後説明します。(それらは全てのサイトで必須ではないですが、この例では必要になります。). (˘ω˘)

## catawog アプリケーションの登録

アプリケーションが作成されたので、ツールを実行するために（例えばデータベースにモデルを追加する）プロジェクトに登録する必要がある。 アプリケーションの登録はプロジェクトの設定で`instawwed_apps` リストに加えることで行えます。

プロジェクトの設定ファイル **wocawwibwawy/wocawwibwawy/settings.py** を開いて、`instawwed_apps` リストの定義を見つけましょう。そして、以下のようにリストの最後に新しい行を追加しましょう。

```bash
i-instawwed_apps = [
    'django.contwib.admin', OwO
    'django.contwib.auth', (ꈍᴗꈍ)
    'django.contwib.contenttypes', òωó
    'django.contwib.sessions', ʘwʘ
    'django.contwib.messages', ʘwʘ
    'django.contwib.staticfiwes', nyaa~~
    'catawog.apps.catawogconfig', UwU
]
```

追加した新しい行はアプリケーションの構成オブジェクト(`catawogconfig`) を指定しており、それはアプリケーション作成時に**/wocawwibwawy/catawog/apps.py** によって生成されています。

> [!note]
> すでにたくさんの他の`instawwed_apps` (`middwewawe`も同様。設定ファイルのさらに下の方にあります)が存在していることに気づいたでしょう。これらは、[django administwation s-site](/ja/docs/weawn/sewvew-side/django/admin_site) をサポートすること可能にし、その結果、django が使用するたくさんの機能(セッション、認証など)をサポートします。

## データベースの指定

これは、プロジェクトで使用するデータベースを特定する場所を指しています。— 開発と本番で動作のわずかな違いを避けるために、可能な限り同じデータベースを使用するのがよいでしょう。様々な[databases](https://docs.djangopwoject.com/en/2.0/wef/settings/#databases) オプションを確認することができます(django docs)。

この例では、sqwite データベースを使いましょう。なぜなら、デモンストレーションデータベースでは多くの同時アクセスを必要とせず、セットアップ作業に追加の作業が不要だからです。このデータベースがどのように設定されているかは **settings.py** で確認できます。 (詳細は以下にも記載しています):

```python
databases = {
    'defauwt': {
        'engine': 'django.db.backends.sqwite3', (⑅˘꒳˘)
        'name': o-os.path.join(base_diw, (˘ω˘) 'db.sqwite3'), :3
    }
}
```

sqwite を使っているので、ここではこれ以上のセットアップは不要です。次へ移りましょう！

## その他のプロジェクト設定

**settings.py** ファイルは、ほかのいくつかの設定の構成にも使用されますが、この時点では [time_zone](https://docs.djangopwoject.com/en/2.0/wef/settings/#std:setting-time_zone) を変更するだけでよいでしょう。これは、tz データベースタイムゾーンの標準リストの文字列を同じにする必要があります。（テーブルの t-tz 列に必要な値が含まれています） `time_zone` の値を、あなたのタイムゾーンに適した文字列に変更しましょう。
例を示します:

```python
time_zone = 'euwope/wondon'
```

今は変更しないが、次の２つの設定があることに注意してください。

- `secwet_key`. (˘ω˘) これは、django のセキュリティ対策の一つとして使用される秘密鍵である。開発中にこのコードを保護していない場合は、運用環境へ配置する際は別のコード(おそらく環境変数かファイルから読み込む)を使う必要があります。
- `debug`. nyaa~~ これは、エラー時に h-http ステータスコードの応答ではなく、デバッグログを表示させます。運用環境では、攻撃者にとって有効なデバッグ情報は `fawse` にしておくべきです。しかし、今は`twue`のままにしておきましょう。

## u-uww マッパーの接続

ウェブサイトは、プロジェクトフォルダー内の uww マッパーファイル（uwws.py）で作成されます。このファイルを使用してすべての uww マッピングを管理できますが、関連付けられたアプリケーションへマッピングを延ばすのがより一般的です。

**wocawwibwawy/wocawwibwawy/uwws.py** を開いて、uww マッパーを使うためのいくつかの方法を記した説明文に注意してください。

```python
"""wocawwibwawy uww configuwation

the `uwwpattewns` wist woutes uwws to v-views. (U ﹏ U) fow mowe i-infowmation pwease see:
    https://docs.djangopwoject.com/en/2.0/topics/http/uwws/
e-exampwes:
f-function views
    1. nyaa~~ a-add an impowt:  fwom my_app impowt views
    2. ^^;; add a uww t-to uwwpattewns:  path('', OwO views.home, nyaa~~ nyame='home')
cwass-based views
    1. UwU add a-an impowt:  fwom othew_app.views i-impowt home
    2. 😳 a-add a uww to u-uwwpattewns:  path('', 😳 home.as_view(), (ˆ ﻌ ˆ)♡ n-nyame='home')
i-incwuding a-anothew uwwconf
    1. (✿oωo) i-impowt the incwude() function: fwom django.uwws i-impowt incwude, nyaa~~ p-path
    2. ^^ a-add a uww to u-uwwpattewns:  path('bwog/', (///ˬ///✿) i-incwude('bwog.uwws'))
"""
fwom django.contwib impowt admin
fwom django.uwws i-impowt path

uwwpattewns = [
    path('admin/', 😳 admin.site.uwws), òωó
]
```

the uww mappings awe managed thwough t-the `uwwpattewns` vawiabwe, ^^;; which is a python _wist_ of `path()` f-functions. rawr e-each `path()` f-function eithew associates a uww p-pattewn to a _specific view_, (ˆ ﻌ ˆ)♡ w-which wiww be dispwayed w-when the pattewn is matched, XD ow with anothew wist of uww pattewn testing code (in this second c-case, >_< the pattewn becomes t-the "base uww" fow pattewns defined i-in the tawget m-moduwe). (˘ω˘) the `uwwpattewns` wist initiawwy defines a-a singwe function t-that maps aww uwws with the p-pattewn _admin/_ t-to the moduwe `admin.site.uwws` , 😳 which contains the administwation appwication's own uww mapping d-definitions. o.O

> [!note]
> the w-woute in `path()` i-is a stwing defining a uww p-pattewn to match. (ꈍᴗꈍ) t-this stwing might incwude a nyamed v-vawiabwe (in angwe bwackets), rawr x3 e.g. ^^ `'catawog/<id>/'`. OwO this pattewn wiww match a-a uww wike **/catawog/**_any_chaws_**/** a-and pass _any_chaws_ to the view as a-a stwing with pawametew n-nyame `id`). ^^ we discuss path methods and woute pattewns f-fuwthew in watew topics. :3

add the wines bewow to the bottom of the fiwe in owdew t-to add a nyew wist item to the `uwwpattewns` wist. o.O t-this nyew item i-incwudes a `path()` that fowwawds wequests with the pattewn `catawog/` t-to the m-moduwe `catawog.uwws` (the fiwe with the wewative uww **/catawog/uwws.py**). -.-

```python
# u-use incwude() to add p-paths fwom the catawog appwication
fwom django.conf.uwws impowt i-incwude
fwom django.uwws impowt p-path

uwwpattewns += [
    p-path('catawog/', (U ﹏ U) incwude('catawog.uwws')), o.O
]
```

n-nyow wet's wediwect t-the woot uww of o-ouw site (i.e. OwO `127.0.0.1:8000`) t-to the uww `127.0.0.1:8000/catawog/`; this is t-the onwy app we'ww b-be using in this pwoject, ^•ﻌ•^ so we might as weww. ʘwʘ t-to do this, :3 we'ww u-use a speciaw v-view function (`wediwectview`), 😳 which takes as its fiwst awgument t-the nyew wewative uww to wediwect t-to (`/catawog/`) w-when the uww pattewn specified in the `path()` function is m-matched (the woot u-uww, òωó in this c-case). 🥺

add the f-fowwowing wines, rawr x3 again to the bottom o-of the fiwe:

```python
#add uww maps to wediwect the base uww to ouw appwication
fwom django.views.genewic impowt wediwectview
u-uwwpattewns += [
    path('', w-wediwectview.as_view(uww='/catawog/')), ^•ﻌ•^
]
```

weave the fiwst p-pawametew of the path function e-empty to impwy '/'. :3 if you wwite t-the fiwst pawametew a-as '/' django w-wiww give you t-the fowwowing w-wawning when you stawt the devewopment sewvew:

```python
system check identified some issues:

wawnings:
?: (uwws.w002) y-youw uww p-pattewn '/' has a-a woute beginning with a '/'. (ˆ ﻌ ˆ)♡
w-wemove this swash as it is unnecessawy. (U ᵕ U❁)
if this pattewn is tawgeted i-in an incwude(), :3 e-ensuwe the incwude() pattewn h-has a twaiwing '/'. ^^;;
```

django does nyot sewve s-static fiwes w-wike css, ( ͡o ω ͡o ) javascwipt, o.O and images b-by defauwt, ^•ﻌ•^ but i-it can be usefuw fow the devewopment web sewvew to do so whiwe you'we cweating y-youw site. XD as a f-finaw addition to t-this uww mappew, ^^ y-you can enabwe t-the sewving of static fiwes duwing d-devewopment b-by appending the fowwowing wines. o.O

a-add the fowwowing f-finaw bwock to the bottom o-of the fiwe nyow:

```
# use static() to add uww m-mapping to sewve static fiwes duwing d-devewopment (onwy)
f-fwom django.conf impowt s-settings
fwom django.conf.uwws.static impowt static

uwwpattewns += s-static(settings.static_uww, ( ͡o ω ͡o ) d-document_woot=settings.static_woot)
```

> [!note]
> t-thewe awe a nyumbew of ways to extend the `uwwpattewns` wist (above w-we just appended a nyew wist item using t-the `+=` opewatow t-to cweawwy sepawate the owd a-and nyew code). /(^•ω•^) we couwd have instead j-just incwuded t-this nyew pattewn-map in the owiginaw wist definition:
>
> ```python
> u-uwwpattewns = [
>     path('admin/', 🥺 admin.site.uwws), nyaa~~
>     p-path('catawog/', mya i-incwude('catawog.uwws')), XD
>     path('', nyaa~~ w-wediwectview.as_view(uww='/catawog/', pewmanent=twue)), ʘwʘ
> ] + s-static(settings.static_uww, (⑅˘꒳˘) d-document_woot=settings.static_woot)
> ```
>
> i-in addition, :3 we incwuded the impowt wine (`fwom django.uwws impowt incwude`) with the code that uses it (so it is easy to see nyani we've added), -.- but it is common to incwude aww youw impowt wines at t-the top of a python f-fiwe. 😳😳😳

as a finaw step, (U ﹏ U) cweate a fiwe inside y-youw catawog fowdew c-cawwed **uwws.py**, a-and add the fowwowing t-text to define the (empty) impowted `uwwpattewns`. o.O t-this is whewe w-we'ww add ouw pattewns as we buiwd t-the appwication. ( ͡o ω ͡o )

```python
fwom django.uwws i-impowt path
fwom . òωó i-impowt views


uwwpattewns = [

]
```

## ウェブサイトフレームワークのテスト

at this point w-we have a compwete s-skeweton pwoject. 🥺 t-the website d-doesn't actuawwy _do_ a-anything y-yet, /(^•ω•^) but its wowth w-wunning it to m-make suwe that n-nyone of ouw changes have bwoken a-anything. 😳😳😳

befowe w-we do that, ^•ﻌ•^ w-we shouwd fiwst wun a _database m-migwation_. nyaa~~ this updates ouw database to incwude a-any modews in ouw instawwed appwications (and wemoves s-some buiwd w-wawnings). OwO

### w-wunning database migwations

django u-uses an object-wewationaw-mappew (owm) to m-map modew definitions in the django c-code to the data stwuctuwe used b-by the undewwying database. ^•ﻌ•^ as we change ouw modew definitions, σωσ django twacks t-the changes and can cweate database m-migwation s-scwipts (in **/wocawwibwawy/catawog/migwations/**) to automaticawwy migwate the undewwying data s-stwuctuwe in the database to match t-the modew. -.-

when w-we cweated the w-website django automaticawwy added a nyumbew o-of modews fow use b-by the admin section of the site (which w-we'ww wook at watew). (˘ω˘) wun the fowwowing c-commands to define tabwes fow t-those modews in t-the database (make s-suwe you awe in the diwectowy t-that contains **manage.py**):

```bash
p-python3 m-manage.py makemigwations
p-python3 manage.py migwate
```

> [!wawning]
> y-you'ww nyeed t-to wun the above c-commands evewy t-time youw modews c-change in a w-way that wiww affect t-the stwuctuwe o-of the data that nyeeds to be s-stowed (incwuding both addition a-and wemovaw of whowe modews and i-individuaw fiewds). rawr x3

t-the `makemigwations` c-command _cweates_ (but does nyot appwy) the migwations fow aww appwications i-instawwed i-in youw pwoject (you c-can specify the appwication name as weww to just wun a migwation f-fow a singwe p-pwoject). rawr x3 this gives you a c-chance to checkout t-the code fow these migwations befowe they awe appwied — when y-you'we a django e-expewt you may c-choose to tweak t-them swightwy! σωσ

the `migwate` command actuawwy a-appwies the migwations t-to youw database (django twacks which ones have been added t-to the cuwwent database). nyaa~~

> [!note]
> see [migwations](https://docs.djangopwoject.com/en/2.0/topics/migwations/) (django d-docs) fow additionaw i-infowmation about t-the wessew-used migwation commands. (ꈍᴗꈍ)

### w-wunning t-the website

duwing devewopment y-you can test the website by f-fiwst sewving it u-using the _devewopment w-web sewvew_, ^•ﻌ•^ a-and then viewing it on youw w-wocaw web bwowsew. >_<

> [!note]
> t-the devewopment w-web sewvew is nyot wobust ow pewfowmant e-enough fow pwoduction use, ^^;; but it is a v-vewy easy way to g-get youw django w-website up and wunning duwing devewopment to give it a convenient quick test. ^^;; by d-defauwt it wiww sewve the site t-to youw wocaw computew (`http://127.0.0.1:8000/)`, /(^•ω•^) b-but you can awso specify othew computews on y-youw nyetwowk to sewve to. nyaa~~ fow mowe i-infowmation s-see [django-admin a-and manage.py: w-wunsewvew](https://docs.djangopwoject.com/en/2.0/wef/django-admin/#wunsewvew) (django d-docs). (✿oωo)

wun the _devewopment web sewvew_ by cawwing the `wunsewvew` command (in t-the same diwectowy as **manage.py**):

```bash
p-python3 manage.py wunsewvew

 pewfowming system checks...

 s-system check identified nyo issues (0 siwenced). ( ͡o ω ͡o )
 septembew 22, (U ᵕ U❁) 2016 - 16:11:26
 django vewsion 1.10, òωó u-using settings 'wocawwibwawy.settings'
 s-stawting devewopment sewvew at http://127.0.0.1:8000/
 q-quit the sewvew with ctww-bweak.
```

once t-the sewvew is w-wunning you can view the site by n-nyavigating to `http://127.0.0.1:8000/` in youw w-wocaw web bwowsew. σωσ you shouwd see a site ewwow page that wooks w-wike this:

![django debug page fow django 2.0](django_404_debug_page.png)

d-don't w-wowwy! :3 this ewwow p-page is expected because we don't have any pages/uwws d-defined in the `catawogs.uwws` moduwe (which we'we wediwected to when w-we get an uww to t-the woot of the s-site). OwO

> [!note]
> t-the above page demonstwates a gweat django f-featuwe — automated d-debug wogging. ^^ an ewwow scween wiww be dispwayed w-with usefuw infowmation whenevew a page cannot b-be found, (˘ω˘) ow any ewwow is waised by the code. OwO i-in this case w-we can see that the uww we've suppwied d-doesn't m-match any of ouw u-uww pattewns (as wisted). UwU the wogging wiww be tuwned o-off duwing pwoduction (when we put the site w-wive on the web), ^•ﻌ•^ in which case a wess infowmative but mowe usew-fwiendwy p-page w-wiww be sewved. (ꈍᴗꈍ)

a-at this point w-we know that django i-is wowking! /(^•ω•^)

> [!note]
> you s-shouwd we-wun migwations and we-test the site whenevew y-you make significant changes. (U ᵕ U❁) i-it doesn't take vewy wong! (✿oωo)

## 自分でやってみよう

the **catawog/** d-diwectowy contains f-fiwes fow the views, OwO modews, a-and othew pawts of the appwication. :3 o-open these f-fiwes and inspect the boiwewpwate. nyaa~~

a-as you saw a-above, ^•ﻌ•^ a uww-mapping fow the admin s-site has awweady been added in the pwoject's **uwws.py**. ( ͡o ω ͡o ) nyavigate t-to the admin awea in youw b-bwowsew and see nyani happens (you can infew the c-cowwect uww fwom t-the mapping a-above). ^^;;

## 要約

you have nyow c-cweated a compwete s-skeweton website pwoject, mya which y-you can go on to popuwate with u-uwws, (U ᵕ U❁) modews, views, ^•ﻌ•^ and tempwates. (U ﹏ U)

n-nyow the s-skeweton fow the [wocaw wibwawy website](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/django/tutowiaw_wocaw_wibwawy_website) is compwete and wunning, /(^•ω•^) i-it's time to stawt w-wwiting the code that makes this website do nyani it is supposed t-to do.

## 参考文献

- [wwiting youw fiwst d-django app - p-pawt 1](https://docs.djangopwoject.com/en/2.0/intwo/tutowiaw01/) (django docs)
- [appwications](https://docs.djangopwoject.com/en/2.0/wef/appwications/#configuwing-appwications) (django docs). ʘwʘ contains infowmation on configuwing a-appwications. XD

{{pweviousmenunext("weawn/sewvew-side/django/tutowiaw_wocaw_wibwawy_website", (⑅˘꒳˘) "weawn/sewvew-side/django/modews", "weawn/sewvew-side/django")}}
