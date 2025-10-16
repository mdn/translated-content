---
title: "Django チュートリアル Part 2: スケルトンウェブサイトの作成"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
original_slug: Learn/Server-side/Django/skeleton_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

[Django チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) の 2 つ目の記事では、基本的なウェブサイトプロジェクトの「スケルトン」をどのように作っていくのかを説明します。サイト固有の設定、URL、モデル、ビュー、テンプレートを作成する方法について説明します。

| 前提条件: | [Django 開発環境の設定](/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)。[Django チュートリアル](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)を確認してください。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | Django のツールを使って自分の新しいウェブサイトプロジェクトを開始できるようにする。                                                                                                                                                                     |

## 概要

この記事は、"スケルトン"ウェブサイトを作る方法を示します。そこにはサイト固有の設定、パス、モデル、ビューやテンプレートを組み込むことができるます。(これらについては後で述べます)

そのプロセスは単純です:

1. `django-admin` ツールを使ってプロジェクトフォルダー、基本的なテンプレートファイル、プロジェクト管理スクリプト(**manage.py**)を作ります .
2. **manage.py** は１つ以上のアプリケーションを作ります。

   > [!NOTE]
   > ウェブサイトは 1 つ以上のセクションから成ります。例えば、メインサイト、ブログ、ウィキ、ダウンロードエリアなど。Django は、これらのコンポーネントを別々のアプリケーションとして作成することを助けてくれます。それらは、必要なら異なるプロジェクトで再利用できます。

3. プロジェクトにアプリケーションを含めるために登録します。
4. url/path マッパーはそれらのアプリケーションを結びつけます。

[Local Library website](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) のために、ウェブサイトフォルダーとプロジェクトフォルダーは _locallibrary_ という名前をつけます。また、１つのアプリケーションは _catalog_ という名前をつけます。 したがって、最上位のフォルダー構成は以下のようになります。:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

以下のセクションでは、その過程をもっと詳細に述べ、あなたが変更を試す方法を示しましょう。この記事の最後に、我々はいくつかの他のウェブサイトの設定について述べてみます。それはあなたがこのステージで行っていることかもしませんが。

## プロジェクトの作成

始めにコマンドプロンプトまたはターミナルを開いて、（先に自分が仮想環境([virtual environment](/ja/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment))にいることを確認して下さい）、Django アプリを格納したい場所へ移動します（ドキュメントフォルダーの中など探しやすい場所にしましょう）。そして、新しいウェブサイトのフォルダー（この場合は _locallibrary_）を作りましょう。そして、cd コマンドでそのフォルダーへ移動しましょう。

```bash
mkdir locallibrary
cd locallibrary
```

以下のように、`django-admin startproject`コマンドで新しいプロジェクトを作り、そのフォルダーの中に移動します。

```bash
django-admin startproject locallibrary
cd locallibrary
```

`django-admin`ツールは以下のようなフォルダー/ファイル構成を作ります。

```bash
locallibrary/
    manage.py
    locallibrary/
        settings.py
        urls.py
        wsgi.py
```

我々の現在の作業ディレクトリーはこのようなものになっているでしょう。

```
../django_projects/locallibrary/
```

*locallibrary*プロジェクトのサブフォルダーはこのウェブサイトに入口点となります:

- **\_\_init\_\_.py** は空ファイルであり、このディレクトリーを Python パッケージとして扱うように指示します。
- **settings.py** はすべてのウェブサイトの設定を含んでいます。ここに、我々が作成した全てのアプリケーション、スタティックファイルの場所やデータベースの詳細設定などを登録します。
- **urls.py** はサイトの url と view のマッピングを定義します。これは、すべての url マッピングコードを含むことができる一方で、いくつかのマッピングは特定のアプリケーションへ委任するのがより一般的です。 また後で分かるでしょう。
- **wsgi.py** はあなたの Django アプリケーションがウェブサーバーと通信するのを助けてくれます。あなたはこれを定型として使うことができます。

**manage.py** スクリプトはアプリケーションを作成したり、データベースを操作したり、ウェブサーバーを起動したりするのに使われます。

## catalog アプリケーションの作成

次に、以下のコマンドを実行し、localibrary プロジェクトの中にアプリケーションを作りましょう。（このコマンドはプロジェクト内の manage.py と同じフォルダーで実行する必要があります）

```bash
python3 manage.py startapp catalog
```

> [!NOTE]
> 上記コマンドは Linux や macOS X 用です。Windows のコマンドは: `py -3 manage.py startapp catalog`
>
> もし Windows を使っているなら、このモジュール（manage.py）を使う際は`python3` を `py -3` に変更して下さい。
>
> もし Python 3.7.0 以降を使用しているなら、`py manage.py startapp catalog`で使用できます。

このツールは新しいフォルダーを作成し、アプリケーションの様々なパーツとなるファイルをそのフォルダーに追加します（以下の太字で表示）。 ほとんどのファイルは目的に応じて便利な名前が付けられており(例えば ビューは**views.py**に、モジュールは **models.py**に、テストは**tests.py**に、管理サイトの設定は **admin.py**に、アプリケーションの登録は**apps.py**に保存する必要がある)、 さらに、関連するオブジェクトを操作するための最低限の定型的なコードを用意している。

アップデートされた後のプロジェクトディレクトリーはこのようになる:

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

加えて今持っているものは:

- "マイグレーション"を格納するためのマイグレーションフォルダーモデルを変更した場合に自動的にデータベースの変更をするためのファイル
- **\_\_init\_\_.py** — Django/Python がこのフォルダーを [Python Package](https://docs.python.org/3/tutorial/modules.html#packages) であると認識するためにここに作られた空のファイル。そうすることで、このオブジェクトは他のプロジェクトでも使用できる。

> [!NOTE]
> 上記ファイルリストに何か欠けているものがあることに気づきましたか？ ビューやモデルがある一方で、URL マッピング、テンプレート、静的ファイルの配置場所はありません。それらの作り方も以後説明します。(それらは全てのサイトで必須ではないですが、この例では必要になります。).

## catalog アプリケーションの登録

アプリケーションが作成されたので、ツールを実行するために（例えばデータベースにモデルを追加する）プロジェクトに登録する必要がある。 アプリケーションの登録はプロジェクトの設定で`INSTALLED_APPS` リストに加えることで行えます。

プロジェクトの設定ファイル **locallibrary/locallibrary/settings.py** を開いて、`INSTALLED_APPS` リストの定義を見つけましょう。そして、以下のようにリストの最後に新しい行を追加しましょう。

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'catalog.apps.CatalogConfig',
]
```

追加した新しい行はアプリケーションの構成オブジェクト(`CatalogConfig`) を指定しており、それはアプリケーション作成時に**/locallibrary/catalog/apps.py** によって生成されています。

> [!NOTE]
> すでにたくさんの他の`INSTALLED_APPS` (`MIDDLEWARE`も同様。設定ファイルのさらに下の方にあります)が存在していることに気づいたでしょう。これらは、[Django administration site](/ja/docs/Learn/Server-side/Django/Admin_site) をサポートすること可能にし、その結果、Django が使用するたくさんの機能(セッション、認証など)をサポートします。

## データベースの指定

これは、プロジェクトで使用するデータベースを特定する場所を指しています。— 開発と本番で動作のわずかな違いを避けるために、可能な限り同じデータベースを使用するのがよいでしょう。様々な[Databases](https://docs.djangoproject.com/en/2.0/ref/settings/#databases) オプションを確認することができます(Django docs)。

この例では、SQLite データベースを使いましょう。なぜなら、デモンストレーションデータベースでは多くの同時アクセスを必要とせず、セットアップ作業に追加の作業が不要だからです。このデータベースがどのように設定されているかは **settings.py** で確認できます。 (詳細は以下にも記載しています):

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

SQLite を使っているので、ここではこれ以上のセットアップは不要です。次へ移りましょう！

## その他のプロジェクト設定

**settings.py** ファイルは、ほかのいくつかの設定の構成にも使用されますが、この時点では [TIME_ZONE](https://docs.djangoproject.com/en/2.0/ref/settings/#std:setting-TIME_ZONE) を変更するだけでよいでしょう。これは、tz データベースタイムゾーンの標準リストの文字列を同じにする必要があります。（テーブルの TZ 列に必要な値が含まれています） `TIME_ZONE` の値を、あなたのタイムゾーンに適した文字列に変更しましょう。
例を示します:

```python
TIME_ZONE = 'Europe/London'
```

今は変更しないが、次の２つの設定があることに注意してください。

- `SECRET_KEY`. これは、Django のセキュリティ対策の一つとして使用される秘密鍵である。開発中にこのコードを保護していない場合は、運用環境へ配置する際は別のコード(おそらく環境変数かファイルから読み込む)を使う必要があります。
- `DEBUG`. これは、エラー時に HTTP ステータスコードの応答ではなく、デバッグログを表示させます。運用環境では、攻撃者にとって有効なデバッグ情報は `False` にしておくべきです。しかし、今は`True`のままにしておきましょう。

## URL マッパーの接続

ウェブサイトは、プロジェクトフォルダー内の URL マッパーファイル（urls.py）で作成されます。このファイルを使用してすべての URL マッピングを管理できますが、関連付けられたアプリケーションへマッピングを延ばすのがより一般的です。

**locallibrary/locallibrary/urls.py** を開いて、URL マッパーを使うためのいくつかの方法を記した説明文に注意してください。

```python
"""locallibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

URL マッピングは `urlpatterns` 変数で管理されます。これは Python の `path()` 関数の _list_ です。各 `path()` 関数は、 URL パターンを、パターンが一致したときに表示される _特定のビュー_ に関連付けるか、または別の URL パターンのテストコードのリストに関連付けます (後者の場合、パターンは対象モジュールで定義されたパターンの「ベース URL 」になります)。 `urlpatterns` リストは最初の要素で、パターン _admin/_ を持つすべての URL を、管理アプリケーションの URL マッピング定義を含むモジュール `admin.site.urls` にマッピングする単一の関数を定義しています。

> [!NOTE]
> `path()` 内のルートは、マッチする URL パターンを定義する文字列です。この文字列には、山括弧（`<>`）で囲まれた名前付き変数（例: `'catalog/<id>/'`）が含まれる場合があります。このパターンは **/catalog/**_any_chars_**/** のような URL にマッチし、 _any_chars_ をパラメーター名 `id` を持つ文字列としてビューに渡します。 path メソッドとルートパターンについては、後のトピックで詳しく説明します。

`urlpatterns` リストに新しいリスト項目を追加するには、以下の行をファイルの末尾に追加します。この新しい項目には、パターン `catalog/` を含むリクエストをモジュール `catalog.urls` （相対 URL が **/catalog/urls.py** であるファイル）に転送する `path()` が含まれます。

```python
# Use include() to add paths from the catalog application
from django.conf.urls import include
from django.urls import path

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

では、サイトのルート URL （つまり `127.0.0.1:8000` ）を `127.0.0.1:8000/catalog/` という URL にリダイレクトしてみましょう。このプロジェクトで使用するアプリはこれだけなので、リダイレクトすることにしました。これを行うには、特別なビュー関数（ `RedirectView` ）を使用します。この関数は、 `path()` 関数で指定された URL パターン（この場合はルート URL）に一致した場合に、リダイレクト先の新しい相対 URL （`/catalog/`）を最初の引数として受け取ります。

以下の行を、ファイルの末尾に追加します:

```python
#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/')),
]
```

パス関数の最初のパラメーターを空にしておくと、 '/' として扱われます。最初のパラメーターに '/' と記述した場合、 Django は開発サーバーの起動時に以下の警告を表示します:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django はデフォルトでは CSS 、 JavaScript 、画像などの静的ファイルの配信しませんが、サイト作成中に開発用ウェブサーバーでこれらのファイルを配信すると便利です。この URL マッパーに以下の行を追加することで、開発中に静的ファイルの配信を有効にすることができます。

ファイルの最後に以下のブロックを追加します:

```
# Use static() to add url mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> `urlpatterns` リストを拡張する方法はいくつかあります (上記では、古いコードと新しいコードを明確に区別するために、`+=` 演算子を使用して新しいリスト項目を追加しました)。代わりに、この新しいパターンマップを元のリスト定義に含めることもできます:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='/catalog/', permanent=True)),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```
>
> さらに、インポート行 (`from django.urls import include`) を、それを使用するコードに含めました (そのため、追加した内容を簡単に確認できます)。ただし、すべてのインポート行を Python ファイルの先頭に含めるのが一般的です。

最後のステップとして、 catalog フォルダー内に **urls.py** というファイルを作成し、以下のテキストを追加して、インポートする（空の） `urlpatterns` を定義します。アプリケーションをビルドする際に、ここにパターンを追加します。

```python
from django.urls import path
from . import views


urlpatterns = [

]
```

## ウェブサイトフレームワークのテスト

この時点で、スケルトンプロジェクトは完成しました。ウェブサイトはまだ実際には何も動作しませんが、変更によって何かが壊れていないか確認するために、実行してみる価値はあります。

その前に、まずデータベースマイグレーションを実行する必要があります。これにより、インストール済みのアプリケーションのモデルがデータベースに追加され、ビルド時の警告もいくつか削除されます。

### データベースマイグレーションの実行

Django は、オブジェクトリレーショナルマッパー (ORM) を使用して、 Django コード内のモデル定義を基盤となるデータベースで使用されるデータ構造にマッピングします。モデル定義を変更すると、Django はその変更を追跡し、データベースマイグレーションスクリプト（**/locallibrary/catalog/migrations/** 内）を作成して、データベース内の基盤となるデータ構造をモデルに合わせて自動的に移行します。

ウェブサイトを作成したときに、 Django はサイトの管理セクションで使用するためのモデルをいくつか自動的に追加しました (これについては後で説明します)。これらのモデルのテーブルをデータベースに定義するには、以下のコマンドを実行します（**manage.py** があるディレクトリーにいることを確認してください）:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> モデルが変更され、保存する必要があるデータの構造に影響が出るたびに（モデル全体および個々のフィールドの追加と削除を含む）、上記のコマンドを実行する必要があります。

`makemigrations` コマンドは、プロジェクトにインストールされているすべてのアプリケーションのマイグレーションを _作成_ します（適用はしません）が、アプリケーション名を指定して単一のプロジェクトのみのマイグレーションを実行することもできます。これにより、マイグレーションを適用する前にコードをチェックアウトできます。 Django に精通している場合は、コードを微調整することもできます。

`migrate` コマンドは実際にデータベースにマイグレーションを適用します（Django は現在のデータベースに追加されたマイグレーションを追跡します）。

> [!NOTE]
> あまり使用されない移行コマンドの詳細については、 [マイグレーション](https://docs.djangoproject.com/ja/5.2/topics/migrations/) (Django ドキュメント) を参照してください。

### ウェブサイトの実行

開発中は、まず _開発用ウェブサーバー_ を使用してウェブサイトを配信し、次にローカルウェブブラウザーで表示することで、ウェブサイトをテストできます。

> [!NOTE]
> 開発用ウェブサーバーは、本番環境での使用に耐えるほど堅牢で高性能ではありませんが、開発中に Django ウェブサイトを立ち上げて簡単にテストを行うための非常に簡単な方法です。デフォルトではローカルコンピューター（ `http://127.0.0.1:8000/`）にサイトを配信しますが、ネットワーク上の他のコンピューターを指定することもできます。詳細については、 [django-admin と manage.py: runserver](https://docs.djangoproject.com/ja/5.2/ref/django-admin/#runserver) (Django ドキュメント) を参照してください。

`runserver` コマンド (**manage.py** と同じディレクトリー内) を呼び出して、 _開発用ウェブサーバー_ を実行します:

```bash
python3 manage.py runserver

 Performing system checks...

 System check identified no issues (0 silenced).
 September 22, 2016 - 16:11:26
 Django version 1.10, using settings 'locallibrary.settings'
 Starting development server at http://127.0.0.1:8000/
 Quit the server with CTRL-BREAK.
```

Once the server is running you can view the site by navigating to `http://127.0.0.1:8000/` in your local web browser. You should see a site error page that looks like this:

![Django Debug page for Django 2.0](django_404_debug_page.png)

Don't worry! This error page is expected because we don't have any pages/urls defined in the `catalogs.urls` module (which we're redirected to when we get an URL to the root of the site).

> [!NOTE]
> The above page demonstrates a great Django feature — automated debug logging. An error screen will be displayed with useful information whenever a page cannot be found, or any error is raised by the code. In this case we can see that the URL we've supplied doesn't match any of our URL patterns (as listed). The logging will be turned off during production (when we put the site live on the Web), in which case a less informative but more user-friendly page will be served.

At this point we know that Django is working!

> [!NOTE]
> You should re-run migrations and re-test the site whenever you make significant changes. It doesn't take very long!

## 自分でやってみよう

The **catalog/** directory contains files for the views, models, and other parts of the application. Open these files and inspect the boilerplate.

As you saw above, a URL-mapping for the Admin site has already been added in the project's **urls.py**. Navigate to the admin area in your browser and see what happens (you can infer the correct URL from the mapping above).

## 要約

You have now created a complete skeleton website project, which you can go on to populate with urls, models, views, and templates.

Now the skeleton for the [Local Library website](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) is complete and running, it's time to start writing the code that makes this website do what it is supposed to do.

## 参考文献

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/2.0/intro/tutorial01/) (Django docs)
- [Applications](https://docs.djangoproject.com/en/2.0/ref/applications/#configuring-applications) (Django Docs). Contains information on configuring applications.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
