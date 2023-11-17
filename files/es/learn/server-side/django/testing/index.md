---
title: "Tutorial de Django Parte 10: Probando una aplicación web Django"
slug: Learn/Server-side/Django/Testing
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

A medida que crecen los sitios web se vuelven más difíciles de probar a mano — no sólo hay más para probar, sino que además, a medida que las interacciones entre los componentes se vuelven más complejas, un pequeño cambio en un área puede suponer muchas pruebas adicionales para verificar su impacto en otras áreas. Una forma de mitigar estos problemas es escribir tests automatizados, que pueden ser ejecutados de manera fácil y fiable cada vez que hagas un cambio. Este tutorial muestra cómo automatizar la unidad de pruebas de tu sitio web usando el framework de pruebas de Django.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos</th>
      <td>
        Completa todos los tópicos anteriores, incluyendo
        <a href="/es/docs/Learn/Server-side/Django/Forms"
          >Tutorial Django Parte 9: Trabajando con formularios</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender como escribir pruebas unidatarias para django basado en Páginas
        web.
      </td>
    </tr>
  </tbody>
</table>

## Vista previa

El [Local Library](/es/docs/Learn/Server-side/Django/Tutorial_local_library_website) actualmente tiene páginas para mostrar las listas con todos los libros y autores, vistas detalladas para los items de `Book` y `Author`, una página para renovar BookInstances y páginas para crear, actualizar y eliminar elementos de autor (y también registros de libros, si usted completó el desafío en el tutorial de formularios). Incluso con este sitio relativamente pequeño, navegar manualmente a cada página y verificar superficialmente que todo funcione como se espera, puede llevar varios minutos. A medida que hagamos cambios y el sitio vaya creciendo, el tiempo requerido para verificar manualmente que todo funcione "correctamente", aumentará de forma muy perniciosa. Si continuamos como estamos, pasaríamos la mayor parte de nuestro tiempo probando, y muy poco tiempo mejorando nuestro código.

¡Las pruebas automatizadas realmente pueden ayudar con este problema! Los beneficios obvios son que pueden ejecutarse mucho más rápido que las pruebas manuales, pueden probar con un nivel de detalle mucho más bajo y probar exactamente la misma funcionalidad cada vez (¡los testers humanos no son tan confiables!) Porque son pruebas rápidas y automatizadas se puede ejecutar más regularmente, y si falla una prueba,
señalan exactamente dónde el código no está funcionando como se esperaba.

Además, las pruebas automatizadas pueden actuar como el primer "usuario" del mundo real de su código, lo que le obliga a ser riguroso a la hora de definir y documentar bien, cómo debe comportarse su sitio web. A menudo son la base de sus ejemplos de código y documentación. Por estas razones, algunos procesos de desarrollo de software comienzan con la definición e implementación de la prueba, después de lo cual el código se escribe para que coincida con el comportamiento requerido (por ejemplo, desarrollo basado en pruebas y en comportamiento).

Este tutorial muestra cómo escribir pruebas automatizadas para Django, agregando una serie de pruebas al sitio web LocalLibrary.

### Tipos de pruebas

Hay numeroso tipos, niveles y clasificaciones de pruebas y enfoques de pruebas. Las pruebas automáticas más importantes son:

- Pruebas unitarias
  - : Verifica el comportamiento funcional de un componente individual, a menudo de una clase y su nivel de funcional.
- Pruebas de regresión
  - : Pruebas que reproducen errores históricos. Cada prueba es inicialmente ejecutada para verificar que el error ha sido corregido, y estos son ejecutados de nuevo para asegurarnos que los errores no fueron reintroducidos con los futuros cambios en el código.
- Pruebas de integración
  - : Verifica cómo funcionan los grupos de componentes cuando se usan juntos. Las pruebas de integración son conscientes de las interacciones requeridas entre componentes, pero no necesariamente de las operaciones internas de cada componente. Pueden cubrir agrupaciones simples de componentes hasta todo el sitio web.

> **Nota:** Otros tipos comunes de pruebas incluyen pruebas de caja negra, caja blanca, manuales, automatizadas, canarias, de humo, de conformidad, de aceptación, funcionales, de rendimiento, de carga y de esfuerzo. Búscalos para más información.

### Que provee Django para pruebas?

Probar un sitio web es una tarea compleja, porque está compuesto por varias capas de lógica, desde el manejo de solicitudes a nivel HTTP, modelos de consultas, hasta la validación y procesamiento de formularios y la representación de plantillas.

Django proporciona un marco de prueba con una pequeña jerarquía de clases que se basan en la libreria [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) estándar Python. A pesar del nombre, este marco de prueba es adecuado tanto para pruebas unitarias como de integración. El marco de Django agrega métodos y herramientas API para ayudar a probar el comportamiento web y específico de Django. Estos le permiten simular solicitudes, insertar datos de prueba e inspeccionar la salida de su aplicación. Django también proporciona una API([LiveServerTestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#liveservertestcase)) y herramientas para [usar diferentes _frameworks_ de pruebas](https://docs.djangoproject.com/en/1.10/topics/testing/advanced/#other-testing-frameworks) , por ejemplo, puede integrarse con el popular _framework_ [Selenium](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) para simular la interacción de un usuario con un navegador en vivo.

Para escribir una prueba, se deriva de cualquiera de las clases base de prueba de Django (o unittest)([SimpleTestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#liveservertestcase)) y luego escribir métodos separados para verificar que la funcionalidad específica funcione como se esperaba (las pruebas usan métodos "assert" para probar que las expresiones dan valores `True` o `False`, o que dos valores son iguales, etc.) Cuando inicia una ejecución de prueba, el marco ejecuta los métodos de prueba elegidos en sus clases derivadas. Los métodos de prueba se ejecutan de forma independiente, con un comportamiento común de configuración y / o desmontaje definido en la clase, como se muestra a continuación.

```python
class YourTestClass(TestCase):

    def setUp(self):
        #La configuración se ejecuta antes de cada método de prueba.
        pass

    def tearDown(self):
        #Limpia la ejecución después de cada método de prueba.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```

La mejor clase base para la mayoría de las pruebas es [django.test.TestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase). Esta clase de prueba crea una base de datos limpia antes de que se ejecuten sus pruebas y ejecuta cada función de prueba en su propia transacción. La clase también posee una prueba [Client](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.Client) que puede utilizar para simular la interacción de un usuario con el código en el nivel de vista. En las siguientes secciones, nos concentraremos en las pruebas unitarias, creadas con esta clase [TestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase)

> **Nota:** La clase [django.test.TestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#testcase) es muy conveniente, pero puede resultar en que algunas pruebas sean más lentas de lo necesario (no todas las pruebas necesitarán configurar su propia base de datos o simular la interacción de la vista). Una vez que esté familiarizado con lo que puede hacer con esta clase, es posible que desee reemplazar algunas de sus pruebas con las clases de prueba más simples disponibles.

### Que deberias probar?

Debe probar todos los aspectos de su propio código, pero no ninguna biblioteca o funcionalidad proporcionada como parte de Python o Django.

Por ejemplo, considere el modelo `Author` definido abajo. No es necesario probarlo explícitamente `first_name` y `last_name` han sido almacenados correctamente como `CharField` en la base de datos porque eso es algo definido por Django (aunque, por supuesto, en la práctica, inevitablemente probará esta funcionalidad durante el desarrollo). Tampoco es necesario probar que el `date_of_birth` ha sido validado para ser un campo de fecha, porque nuevamente es algo implementado en Django.

Sin embargo, debe verificar el texto utilizado para las etiquetas (nombre, apellido, fecha de nacimiento, fallecimiento) y el tamaño del campo asignado para el texto (100 caracteres), porque estos son parte de su diseño y algo que podría ser roto / cambiado en el futuro.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```

Del mismo modo, debe verificar que los métodos personalizados `get_absolute_url()` y `__str__()` comportarse como sea necesario porque son su código / lógica empresarial. En el caso de `get_absolute_url()` puedes confiar en que el metodo de Django `reverse()` se ha implementado correctamente, por lo que lo que está probando es que la vista asociada se haya definido realmente.

> **Nota:** Los lectores astutos pueden notar que también querríamos restringir la fecha de nacimiento y muerte a valores sensibles, y comprobar que la muerte viene después del nacimiento. En Django, esta restricción se agregaría a sus clases de formulario (aunque puede definir validadores para los campos, estos parecen usarse solo en el nivel del formulario, no en el nivel del modelo).

Con eso en mente, comencemos a ver cómo definir y ejecutar pruebas.

## Descripción general de la estructura de prueba

Antes de entrar en los detalles de "qué probar", primero veamos brevemente dónde y cómo se definen las pruebas.

Django utiliza el descubrimiento de pruebas integrado del módulo unittest ([built-in test discovery)](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), que descubrirá pruebas en el directorio de trabajo actual en cualquier archivo nombrado con el patrón **test\*.py**. Siempre que asigne un nombre a los archivos de forma adecuada, puede utilizar la estructura que desee. Le recomendamos que cree un módulo para su código de prueba y que tenga archivos separados para modelos, vistas, formularios y cualquier otro tipo de código que necesite probar. Por ejemplo:

```
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Cree una estructura de archivo como se muestra arriba en su proyecto _LocalLibrary_. El **\_\_init\_\_.py** debe ser un archivo vacío (esto le dice a Python que el directorio es un paquete). Puede crear los tres archivos de prueba copiando y cambiando el nombre del archivo de prueba de esqueleto **/catalog/tests.py**.

> **Nota:** El archivo de prueba **/catalog/tests.py** se creó automáticamente cuando creamos el sitio web esqueleto de Django ( [built the Django skeleton website)](/es/docs/Learn/Server-side/Django/skeleton_website). Es perfectamente "legal" poner todas sus pruebas dentro de él, pero si prueba correctamente, rápidamente terminará con un archivo de prueba muy grande e inmanejable.Elimina el archivo esqueleto ya que no lo necesitaremos.

Abre el archivo **/catalog/tests/test_models.py**. El archivo debe importar `django.test.TestCase`, como se muestra:

```python
from django.test import TestCase

# Create your tests here.
```

A menudo, agregará una clase de prueba para cada modelo / vista / formulario que desee probar, con métodos individuales para probar una funcionalidad específica. En otros casos, es posible que desee tener una clase separada para probar un caso de uso específico, con funciones de prueba individuales que prueben aspectos de ese caso de uso (por ejemplo, una clase para probar que un campo de modelo está validado correctamente, con funciones para probar cada uno de los posibles casos de falla). Una vez más, la estructura depende en gran medida de usted, pero es mejor si es coherente.

Agregue la clase de prueba a continuación al final del archivo. La clase demuestra cómo construir una clase de caso de prueba derivando de `TestCase`.

```python
class YourTestClass(TestCase):

    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Ejecute una vez para configurar datos no modificados para todos los métodos de clase.")
        pass

    def setUp(self):
        print("setUp: Ejecutar una vez por cada método de prueba para configurar datos limpios.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

La nueva clase define dos métodos que puede utilizar para la configuración previa a la prueba (por ejemplo, para crear modelos u otros objetos que necesitará para la prueba):

- `setUpTestData()` se llama una vez al comienzo de la ejecución de prueba para la configuración a nivel de clase. Usaría esto para crear objetos que no se modificarán ni cambiarán en ninguno de los métodos de prueba.
- `setUp()` se llama antes de cada función de prueba para configurar cualquier objeto que pueda ser modificado por la prueba (cada función de prueba obtendrá una versión "nueva" de estos objetos).

> **Nota:** Las clases de prueba también tienen un metodo `tearDown()` que no hemos utilizado. Este método no es particularmente útil para las pruebas de bases de datos, ya que `TestCase` la clase base se encarga del desmontaje de la base de datos por usted.

Debajo de ellos tenemos una serie de métodos de prueba, que utilizamos funciones `Assert` toprobar si las condiciones son verdaderas, falsas o iguales (`AssertTrue`, `AssertFalse`, `AssertEqual`). Si la condición no se evalúa como se esperaba, la prueba fallará y reportará el error a su consola.

Los `AssertTrue`, `AssertFalse`, `AssertEqual` son afirmaciones estándar proporcionadas por **unittest**. Hay otras aserciones estándar en el marco y también aserciones específicas de Django ([Django-specific assertions](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#assertions)) para probar si una vista redirecciona (`assertRedirects`),para probar si se ha utilizado una plantilla en particular (`assertTemplateUsed`), etc.

> **Nota:** Normalmente no debería incluir funciones print() en sus pruebas como se muestra arriba. Lo hacemos aquí solo para que pueda ver el orden en que se llaman las funciones de configuración en la consola (en la siguiente sección).

## Como correr las pruebas

La forma más sencilla de ejecutar todas las pruebas es utilizar el comando:

```bash
python3 manage.py test
```

Esto descubrirá todos los archivos nombrados con el patrón **test\*.py** bajo el directorio actual y ejecute todas las pruebas definidas usando las clases base apropiadas (aquí tenemos una serie de archivos de prueba, pero solo **/catalog/tests/test_models.py** contiene actualmente cualquier prueba). De forma predeterminada, las pruebas informarán individualmente solo sobre las fallas de las pruebas, seguidas de un resumen de la prueba.

> **Nota:** Si recibe errores similares a: `ValueError: Missing staticfiles manifest entry ...` esto puede deberse a que las pruebas no ejecutan collectstatic de forma predeterminada y su aplicación usa una clase de almacenamiento que lo requiere (consulte manifest_strict para obtener más información). Hay varias formas de superar este problema; la más fácil es simplemente ejecutar collectstatic antes de ejecutar las pruebas:
>
> ```bash
> python3 manage.py collectstatic
> ```

Ejecute las pruebas en el directorio raíz de LocalLibrary. Debería ver un resultado como el siguiente.

```bash
>python manage.py test

Creating test database for alias 'default'...
setUpTestData: Ejecute una vez para configurar datos no modificados para todos los métodos de clase.
setUp: Ejecutar una vez por cada método de prueba para configurar datos limpios.
Method: test_false_is_false.
.setUp: Ejecutar una vez por cada método de prueba para configurar datos limpios.
Method: test_false_is_true.
FsetUp: Ejecutar una vez por cada método de prueba para configurar datos limpios.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\Github\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Aquí vemos que tuvimos una falla de prueba, y podemos ver exactamente qué función falló y por qué (se espera esta falla, porque `False` no es `True`!).

> **Nota:** Sugerencia: Lo más importante que debe aprender del resultado de la prueba anterior es que es mucho más valioso si usa nombres descriptivos / informativos para sus objetos y métodos.

El texto que se muestra en **negritas** anterior normalmente no aparecería en la salida de prueba (esto es generado por la funcion `print()` en nuestra prueba). Esto muestra el metodo `setUpTestData()` es llamado una vez para la clase y `setUp()`se llama antes de cada método.

Las siguientes secciones muestran cómo puede ejecutar pruebas específicas y cómo controlar cuánta información muestran las pruebas.

### Mostrando más información de las pruebas

Si desea obtener más información sobre la ejecución de prueba, puede cambiar el nivel de detalle. Por ejemplo, para enumerar los éxitos y fallas de la prueba (y una gran cantidad de información sobre cómo está configurada la base de datos de prueba), puede establecer la verbosidad en "2" como se muestra:

```bash
python3 manage.py test --verbosity 2
```

Los niveles de información permitidos son 0, 1, 2 y 3, siendo el valor predeterminado "1".

### Ejecutando pruebas especificas

Si desea ejecutar un subconjunto de sus pruebas, puede hacerlo especificando la ruta de puntos completa al paquete (s), módulo, `TestCase` subclase o metodo:

```bash
python3 manage.py test catalog.tests   # Ejecutar el módulo especificado
python3 manage.py test catalog.tests.test_models  # Ejecutar el módulo especificado
python3 manage.py test catalog.tests.test_models.YourTestClass # Ejecutar la clase especificada
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two  # Ejecutar el método especificado
```

## Pruebas en el proyecto LocalLibrary

Ahora que sabemos cómo ejecutar nuestras pruebas y qué tipo de cosas necesitamos probar, veamos algunos ejemplos prácticos.

> **Nota:** No escribiremos todas las pruebas posibles, pero esto debería darle una idea de cómo funcionan las pruebas y qué más puede hacer.

### Modelos

Como se discutió anteriormente, debemos probar todo lo que sea parte de nuestro diseño o que esté definido por el código que hayamos escrito, pero no las bibliotecas / código que ya haya probado Django o el equipo de desarrollo de Python.

Por ejemplo, considere el modelo de `Author` a continuación. Aquí deberíamos probar las etiquetas para todos los campos, porque aunque no hemos especificado explícitamente la mayoría de ellos, tenemos un diseño que dice cuáles deberían ser estos valores. Si no probamos los valores, entonces no sabemos que las etiquetas de los campos tienen sus valores deseados. De manera similar, aunque confiamos en que Django creará un campo de la longitud especificada, vale la pena especificar una prueba para esta longitud para asegurarse de que se implementó según lo planeado.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```

Abra su **/catalog/tests/test_models.py**, y reemplace cualquier código existente con el siguiente código de prueba para el modelo de `Author`.

Aquí usted verá que primero importamos `TestCase` y derivamos nuestras clases de prueba (`AuthorModelTest`) de ello, usando un nombre descriptive para que así podamos fácilmente cualquier pruebas fallidas en el output de la prueba. Luego llamamos a `setUpTestData()` para crear un objeto de autor que usaremos pero no modificaremos en ninguna de las pruebas.

```python
from django.test import TestCase

# Create your tests here.

from catalog.models import Author

class AuthorModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Configurar objetos no modificados utilizados por todos los métodos de prueba
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label,'first name')

    def test_date_of_death_label(self):
        author=Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEquals(field_label,'died')

    def test_first_name_max_length(self):
        author=Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEquals(max_length,100)

    def test_object_name_is_last_name_comma_first_name(self):
        author=Author.objects.get(id=1)
        expected_object_name = '%s, %s' % (author.last_name, author.first_name)
        self.assertEquals(expected_object_name,str(author))

    def test_get_absolute_url(self):
        author=Author.objects.get(id=1)
        #Esto también fallará si la urlconf no está definida.
        self.assertEquals(author.get_absolute_url(),'/catalog/author/1')
```

Las pruebas de campo verifican que los valores de las etiquetas de campo (`verbose_name`) y que el tamaño de los campos de caracteres sean los esperados. Todos estos métodos tienen nombres descriptivos y siguen el mismo patrón:

```python
author=Author.objects.get(id=1)   # Obtener un objeto de autor para probar
field_label = author._meta.get_field('first_name').verbose_name   # Obtenga los metadatos para el campo requerido y utilícelos para consultar los datos del campo requerido
self.assertEquals(field_label,'first name')  # Compare el valor con el resultado esperado
```

Las cosas interesantes a tener en cuenta son:

- No podemos obtener `verbose_name` directamente usando `author.first_name.verbose_name`, porque `author.first_name` es una _cadena_ (no un identificador del objeto `first_name` que podemos usar para acceder a sus propiedades). En su lugar, necesitamos usar el atributo `_meta` del autor para obtener una instancia del campo y usarlo para consultar la información adicional.
- Elegimos usar `assertEquals(field_label,'first name')` en lugar de `assertTrue(field_label == 'first name')`. La razón de esto es que si la prueba falla, la salida de la primera le dice cuál era realmente la etiqueta, lo que facilita un poco la depuración del problema.

> **Nota:** Se han omitido las pruebas para las etiquetas `last_name` y `date_of_birth`, y también la prueba para la longitud del campo `last_name`. Agregue sus propias versiones ahora, siguiendo las convenciones de nomenclatura y los enfoques que se muestran arriba.

También necesitamos probar nuestros métodos personalizados. Básicamente, estos simplemente verifican que el nombre del objeto se construyó como esperábamos usando el formato "Apellido", "Nombre", y que la URL que obtenemos para un elemento `Autor` es como esperábamos.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author=Author.objects.get(id=1)
    expected_object_name = '%s, %s' % (author.last_name, author.first_name)
    self.assertEquals(expected_object_name,str(author))

def test_get_absolute_url(self):
    author=Author.objects.get(id=1)
    #Esto también fallará si la urlconf no está definida.
    self.assertEquals(author.get_absolute_url(),'/catalog/author/1')
```

Ejecute las pruebas ahora. Si creó el modelo de autor como se describe en el tutorial de modelos, es muy probable que obtenga un error para la etiqueta `date_of_death` como se muestra a continuación. La prueba está fallando porque se escribió esperando que la definición de la etiqueta siguiera la convención de Django de no poner en mayúscula la primera letra de la etiqueta (Django lo hace por usted).

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEquals(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

Este es un error muy pequeño, pero resalta cómo las pruebas de escritura pueden verificar más a fondo cualquier suposición que haya hecho.

> **Nota:** Cambie la etiqueta del campo `date_of_death` (/catalog/models.py) a "died" y vuelva a ejecutar las pruebas.

Los patrones para probar los otros modelos son similares, por lo que no continuaremos discutiéndolos más. Siéntase libre de crear sus propias pruebas para nuestros otros modelos.

### Formularios

La filosofía para probar sus formularios es la misma que para probar sus modelos; necesita probar cualquier cosa que haya codificado o que especifique su diseño, pero no el comportamiento del marco subyacente y otras bibliotecas de terceros.

En general, esto significa que debe probar que los formularios tienen los campos que desea y que estos se muestran con las etiquetas y el texto de ayuda apropiados. No necesita verificar que Django valide el tipo de campo correctamente (a menos que haya creado su propio campo personalizado y validación), es decir, no necesita probar que un campo de correo electrónico solo acepta correos electrónicos. Sin embargo, deberá probar cualquier validación adicional que espera que se realice en los campos y cualquier mensaje que genere su código para detectar errores.

Considere nuestro formulario para renovar libros. Esto tiene solo un campo para la fecha de renovación, que tendrá una etiqueta y un texto de ayuda que necesitaremos verificar.

```python
class RenewBookForm(forms.Form):
    """
    Formulario para un bibliotecario para renovar libros.
    """
    renewal_date = forms.DateField(help_text="Ingrese una fecha entre ahora y 4 semanas (predeterminado 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        #Verifica que la fecha no está en el pasado.
        if data < datetime.date.today():
            raise ValidationError(_('Fecha inválida - renovación en el pasado'))
        #Veridica que la fecha está dentro del rango El bibliotecario puede cambiar (+4 semanas)
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Fecha inválida - renovación con más de 4 semanas de antelación'))

        # Recuerde devolver siempre los datos limpios.
        return data
```

Abra nuestro archivo **/catalog/tests/test_forms.py** y reemplace cualquier código existente con el siguiente código de prueba para el formulario `RenewBookForm`. Comenzamos importando nuestro formulario y algunas bibliotecas de Python y Django para ayudar a probar la funcionalidad relacionada con el tiempo. Luego declaramos nuestra clase de prueba de formulario de la misma manera que lo hicimos para los modelos, usando un nombre descriptivo para nuestra clase de prueba derivada de `TestCase`.

```python
from django.test import TestCase

# Create your tests here.

import datetime
from django.utils import timezone
from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):

    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label == None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text,'Ingrese una fecha entre ahora y 4 semanas (predeterminado 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.now() + datetime.timedelta(weeks=4)
        form_data = {'renewal_date': date}
        form = RenewBookForm(data=form_data)
        self.assertTrue(form.is_valid())
```

Las dos primeras funciones prueban que los campos `label` y `help_text` son los esperados. Tenemos que acceder al campo usando el diccionario de campos (por ejemplo, `form.fields['renewal_date']`). Tenga en cuenta aquí que también tenemos que probar si el valor de la etiqueta es `None`, porque aunque Django mostrará la etiqueta correcta, devuelve `None` si el valor no está _explícitamente_ establecido.

El resto de las funciones prueban que el formulario es válido para fechas de renovación justo dentro del rango aceptable e inválido para valores fuera del rango. Tenga en cuenta cómo construimos valores de fecha de prueba alrededor de nuestra fecha actual (`datetime.date.today()`) usando `datetime.timedelta()` (en este caso especificando un número de días o semanas). Luego simplemente creamos el formulario, pasamos nuestros datos y probamos si es válido.

> **Nota:** Aquí en realidad no usamos la base de datos o el cliente de prueba. Considere modificar estas pruebas para usar [SimpleTestCase](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.SimpleTestCase). También debemos validar que se generen los errores correctos si el formulario no es válido, sin embargo, esto generalmente se hace como parte del procesamiento de la vista, por lo que nos ocuparemos de eso en la siguiente sección.

Eso es todo por los formularios; tenemos algunos otros, pero son creados automáticamente por nuestras vistas de edición genéricas basadas en clases, ¡y deben probarse allí! ¡Ejecute las pruebas y confirme que nuestro código aún pasa!

### Vistas

Para validar nuestro comportamiento de vista, usamos la prueba Django [Cliente](https://docs.djangoproject.com/en/1.10/topics/testing/tools/#django.test.Client). Esta clase actúa como un navegador web ficticio que podemos usar para simular solicitudes `GET` y `POST` en una URL y observar la respuesta. Podemos ver casi todo sobre la respuesta, desde HTTP de bajo nivel (encabezados de resultados y códigos de estado) hasta la plantilla que estamos usando para representar el HTML y los datos de contexto que le estamos pasando. También podemos ver la cadena de redirecciones (si las hay) y comprobar la URL y el código de estado en cada paso. Esto nos permite verificar que cada vista está haciendo lo que se espera.

Comencemos con una de nuestras vistas más simples, que proporciona una lista de todos los autores. Esto se muestra en URL **/catalog/authors/** (una URL llamada 'authors' en la configuración de URL).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Como esta es una vista de lista genérica, Django hace casi todo por nosotros. Podría decirse que si confía en Django, lo único que necesita probar es que se puede acceder a la vista en la URL correcta y se puede acceder usando su nombre. Sin embargo, si está utilizando un proceso de desarrollo basado en pruebas, comenzará escribiendo pruebas que confirmen que la vista muestra todos los autores, paginándolos en lotes de 10.

Abra el archivo **/catalog/tests/test_views.py** y reemplace cualquier texto existente con el siguiente código de prueba para `AuthorListView`. Como antes, importamos nuestro modelo y algunas clases útiles. En el método `setUpTestData()` configuramos una serie de objetos `Autor` para que podamos probar nuestra paginación.

```python
from django.test import TestCase

# Create your tests here.

from catalog.models import Author
from django.urls import reverse

class AuthorListViewTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        #Crear 13 autores para pruebas de paginación
        number_of_authors = 13
        for author_num in range(number_of_authors):
            Author.objects.create(first_name='Christian %s' % author_num, last_name = 'Surname %s' % author_num,)

    def test_view_url_exists_at_desired_location(self):
        resp = self.client.get('/catalog/authors/')
        self.assertEqual(resp.status_code, 200)

    def test_view_url_accessible_by_name(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)

    def test_view_uses_correct_template(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)

        self.assertTemplateUsed(resp, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        resp = self.client.get(reverse('authors'))
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('is_paginated' in resp.context)
        self.assertTrue(resp.context['is_paginated'] == True)
        self.assertTrue( len(resp.context['author_list']) == 10)

    def test_lists_all_authors(self):
        #Obtenga la segunda página y confirme que tiene (exactamente) 3 elementos restantes
        resp = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(resp.status_code, 200)
        self.assertTrue('is_paginated' in resp.context)
        self.assertTrue(resp.context['is_paginated'] == True)
        self.assertTrue( len(resp.context['author_list']) == 3)
```

Todas las pruebas usan el cliente (perteneciente a la clase derivada de nuestro `TestCase`) para simular una solicitud `GET` y obtener una respuesta (`resp`). La primera versión verifica una URL específica (nota, solo la ruta específica sin el dominio) mientras que la segunda genera la URL a partir de su nombre en la configuración de URL.

```python
resp = self.client.get('/catalog/authors/')
resp = self.client.get(reverse('authors'))
```

Una vez que tenemos la respuesta, consultamos su código de estado, la plantilla utilizada, si la respuesta está paginada o no, la cantidad de elementos devueltos y la cantidad total de elementos.

La variable más interesante que mostramos arriba es `resp.context`, que es la variable de contexto que la vista pasa a la plantilla. Esto es increíblemente útil para realizar pruebas, ya que nos permite confirmar que nuestra plantilla obtiene todos los datos que necesita. En otras palabras, podemos verificar que estamos usando la plantilla deseada y qué datos está obteniendo la plantilla, lo que contribuye en gran medida a verificar que cualquier problema de representación se deba únicamente a la plantilla.

#### Vistas restringidas a usuarios registrados

En algunos casos, querrá probar una vista que está restringida solo a los usuarios registrados. Por ejemplo, nuestro `LoanedBooksByUserListView` es muy similar a nuestra vista anterior, pero solo está disponible para los usuarios registrados y solo muestra los registros de `BookInstance` que el usuario actual tomó prestados, tienen el estado 'en préstamo' y están ordenados como "los más antiguos". primero".

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin,generic.ListView):
    """
    Vista genérica basada en clases que enumera los libros prestados al usuario actual.
    """
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Agregue el siguiente código de prueba a **/catalog/tests/test_views.py**. Aquí primero usamos `SetUp()` para crear algunas cuentas de inicio de sesión de usuario y objetos `BookInstance` (junto con sus libros asociados y otros registros) que usaremos más adelante en las pruebas. Cada usuario de prueba toma prestado la mitad de los libros, pero inicialmente hemos establecido el estado de todos los libros en "mantenimiento". Hemos usado `SetUp()` en lugar de `setUpTestData()` porque modificaremos algunos de estos objetos más adelante.

> **Nota:** El siguiente código `setUp()` crea un libro con un `Language` específico, pero es posible que _su_ código no incluya el modelo `Language` ya que se creó como un _desafío_. Si este es el caso, simplemente comente las partes del código que crean o importan objetos de lenguaje. También debe hacer esto en la sección `RenewBookInstancesViewTest` que sigue.

```python
import datetime
from django.utils import timezone

from catalog.models import BookInstance, Book, Genre, Language
from django.contrib.auth.models import User #Obligatorio para asignar al usuario como prestatario

class LoanedBookInstancesByUserListViewTest(TestCase):

    def setUp(self):
        #Crear dos usuarios
        test_user1 = User.objects.create_user(username='testuser1', password='12345')
        test_user1.save()
        test_user2 = User.objects.create_user(username='testuser2', password='12345')
        test_user2.save()

        #Crear un libro
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(title='Book Title', summary = 'My book summary', isbn='ABCDEFG', author=test_author, language=test_language)
        # Crear género como un paso posterior
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) #No se permite la asignación directa de tipos de muchos a muchos.
        test_book.save()

        #Crea 30 objetos BookInstance
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date= timezone.now() + datetime.timedelta(days=book_copy%5)
            if book_copy % 2:
                the_borrower=test_user1
            else:
                the_borrower=test_user2
            status='m'
            BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=the_borrower, status=status)

    def test_redirect_if_not_logged_in(self):
        resp = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(resp, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        #Comprobar que nuestro usuario tiene sesión iniciada
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Comprueba que obtuvimos una respuesta "exitosa"
        self.assertEqual(resp.status_code, 200)

        #Compruebe que usamos la plantilla correcta
        self.assertTemplateUsed(resp, 'catalog/bookinstance_list_borrowed_user.html')
```

Para verificar que la vista redirigirá a una página de inicio de sesión si el usuario no ha iniciado sesión, usamos `assertRedirects`, como se demuestra en `test_redirect_if_not_logged_in()`. Para verificar que la página se muestra para un usuario conectado, primero iniciamos sesión en nuestro usuario de prueba y luego accedemos a la página nuevamente y verificamos que obtengamos un `status_code` de 200 (éxito).

El resto de la prueba verifica que nuestra vista solo devuelve libros que están en préstamo a nuestro prestatario actual. Copie el código (que se explica por sí mismo) al final de la clase de prueba anterior.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        #Comprobar que nuestro usuario tiene sesión iniciada
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Comprueba que obtuvimos una respuesta "éxito"
        self.assertEqual(resp.status_code, 200)

        #CComprueba que inicialmente no tenemos ningún libro en lista (ninguno en préstamo)
        self.assertTrue('bookinstance_list' in resp.context)
        self.assertEqual( len(resp.context['bookinstance_list']),0)

        #Ahora cambia todos los libros para que estén en préstamo
        get_ten_books = BookInstance.objects.all()[:10]

        for copy in get_ten_books:
            copy.status='o'
            copy.save()

        #Comprueba que ahora tenemos libros prestados en la lista
        resp = self.client.get(reverse('my-borrowed'))
        #Comprobar que nuestro usuario tiene sesión iniciada
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Comprueba que obtuvimos una respuesta "éxito"
        self.assertEqual(resp.status_code, 200)

        self.assertTrue('bookinstance_list' in resp.context)

        #Confirma que todos los libros pertenecen a testuser1 y están en préstamo
        for bookitem in resp.context['bookinstance_list']:
            self.assertEqual(resp.context['user'], bookitem.borrower)
            self.assertEqual('o', bookitem.status)

    def test_pages_ordered_by_due_date(self):

        #Cambiar todos los libros para que estén en préstamo
        for copy in BookInstance.objects.all():
            copy.status='o'
            copy.save()

        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('my-borrowed'))

        #Comprobar que nuestro usuario tiene sesión iniciada
        self.assertEqual(str(resp.context['user']), 'testuser1')
        #Comprueba que obtuvimos una respuesta "éxito"
        self.assertEqual(resp.status_code, 200)

        #Confirma que de los artículos, solo se muestran 10 debido a la paginación.
        self.assertEqual( len(resp.context['bookinstance_list']),10)

        last_date=0
        for copy in resp.context['bookinstance_list']:
            if last_date==0:
                last_date=copy.due_back
            else:
                self.assertTrue(last_date <= copy.due_back)
```

¡También puede agregar pruebas de paginación, si así lo desea!

#### Probar vistas con formularios

Probar vistas con formularios es un poco más complicado que en los casos anteriores, porque necesita probar más rutas de código: visualización inicial, visualización después de que la validación de datos haya fallado y visualización después de que la validación haya tenido éxito. La buena noticia es que usamos el cliente para realizar pruebas casi exactamente de la misma manera que lo hicimos para las vistas de solo visualización.

Para demostrarlo, escribamos algunas pruebas para la vista utilizada para renovar libros (`renew_book_librarian()`):

```python
from .forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """
    Ver función para renovar una BookInstance específica por bibliotecario
    """
    book_inst=get_object_or_404(BookInstance, pk = pk)

    # Si se trata de una solicitud POST, procese los datos del formulario
    if request.method == 'POST':

        # Cree una instancia de formulario y complétela con datos de la solicitud (enlace):
        form = RenewBookForm(request.POST)

        # Compruebe si el formulario es válido:
        if form.is_valid():
            # procese los datos en form.cleaned_data según sea necesario (aquí solo los escribimos en el campo due_back del modelo)
            book_inst.due_back = form.cleaned_data['renewal_date']
            book_inst.save()

            # redirigir a una nueva URL:
            return HttpResponseRedirect(reverse('all-borrowed') )

    # Si se trata de un GET (o cualquier otro método), cree el formulario predeterminado
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date,})

    return render(request, 'catalog/book_renew_librarian.html', {'form': form, 'bookinst':book_inst})
```

Tendremos que probar que la vista solo está disponible para los usuarios que tienen el permiso `can_mark_returned` y que los usuarios son redirigidos a una página de error HTTP 404 si intentan renovar una `BookInstance` que no existe. Deberíamos verificar que el valor inicial del formulario esté iniciado con una fecha de tres semanas en el futuro y que, si la validación tiene éxito, se nos redirija a la vista "todos los libros prestados". Como parte de la verificación de las pruebas de falla de validación, también verificaremos que nuestro formulario envíe los mensajes de error apropiados.

Agregue la primera parte de la clase de prueba (que se muestra a continuación) al final de **/catalog/tests/test_views.py**. Esto crea dos usuarios y dos instancias de libros, pero solo otorga a un usuario el permiso necesario para acceder a la vista. El código para otorgar permisos durante las pruebas se muestra en negrita:

```python
from django.contrib.auth.models import Permission # Requerido para otorgar el permiso necesario para establecer un libro como devuelto.

class RenewBookInstancesViewTest(TestCase):

    def setUp(self):
        #Crear un usuario
        test_user1 = User.objects.create_user(username='testuser1', password='12345')
        test_user1.save()

        test_user2 = User.objects.create_user(username='testuser2', password='12345')
        test_user2.save()
        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        #Crear un libro
        test_author = Author.objects.create(first_name='John', last_name='Smith')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(title='Book Title', summary = 'My book summary', isbn='ABCDEFG', author=test_author, language=test_language,)
        # Crear género como un paso posterior
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # No se permite la asignación directa de tipos de muchos a muchos.
        test_book.save()

        #Cree un objeto BookInstance para test_user1
        return_date= datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1=BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=test_user1, status='o')

        #Cree un objeto BookInstance para test_user2
        return_date= datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2=BookInstance.objects.create(book=test_book,imprint='Unlikely Imprint, 2016', due_back=return_date, borrower=test_user2, status='o')
```

Agregue las siguientes pruebas al final de la clase de prueba. Estos comprueban que solo los usuarios con los permisos correctos (_testuser2_) pueden acceder a la vista. Verificamos todos los casos: cuando el usuario no ha iniciado sesión, cuando un usuario ha iniciado sesión pero no tiene los permisos correctos, cuando el usuario tiene permisos pero no es el prestatario (debería tener éxito) y qué sucede cuando intenta acceder a una `BookInstance` que no existe. También comprobamos que se utiliza la plantilla correcta.

```python
    def test_redirect_if_not_logged_in(self):
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        #Revisar manualmente la redirección (no se puede usar assertRedirect, porque la URL de redirección es impredecible)
        self.assertEqual( resp.status_code,302)
        self.assertTrue( resp.url.startswith('/accounts/login/') )

    def test_redirect_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )

        #Revisar manualmente la redirección (no se puede usar assertRedirect, porque la URL de redirección es impredecible)
        self.assertEqual( resp.status_code,302)
        self.assertTrue( resp.url.startswith('/accounts/login/') )

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance2.pk,}) )

        #Comprobar que nos permita iniciar sesión: este es nuestro libro y tenemos los permisos correctos.
        self.assertEqual( resp.status_code,200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )

        #Comprobar que nos deja iniciar sesión. Somos bibliotecarios, por lo que podemos ver cualquier libro de usuarios.
        self.assertEqual( resp.status_code,200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        import uuid
        test_uid = uuid.uuid4() #¡Es improbable que el UID coincida con nuestra instancia de libro!
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid,}) )
        self.assertEqual( resp.status_code,404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        self.assertEqual( resp.status_code,200)

        #Compruebe que usamos la plantilla correcta
        self.assertTemplateUsed(resp, 'catalog/book_renew_librarian.html')
```

Agregue el siguiente método de prueba, como se muestra a continuación. Esto comprueba que la fecha inicial del formulario es tres semanas en el futuro. Observe cómo podemos acceder al valor del valor inicial del campo de formulario (que se muestra en negrita).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='12345')
        resp = self.client.get(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}) )
        self.assertEqual( resp.status_code,200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(resp.context['form'].initial['renewal_date'], date_3_weeks_in_future )
```

La siguiente prueba (agregar esto también a la clase) verifica que la vista redirige a una lista de todos los libros prestados si la renovación tiene éxito. Lo que difiere aquí es que, por primera vez, mostramos cómo puede "POST" datos usando el cliente. La publicación _datos_ es el segundo argumento de la función de publicación y se especifica como un diccionario de clave/valores.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='12345')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future} )
        self.assertRedirects(resp, reverse('all-borrowed') )
```

> **Advertencia:** La vista _all-borrowed_ se agregó como un _desafío_ y, en su lugar, su código puede redirigir a la página de inicio '/'. Si es así, modifique las dos últimas líneas del código de prueba para que sea como el siguiente código. El `follow=True` en la solicitud asegura que la solicitud devuelve la URL de destino final (por lo tanto, verifica `/catalog/` en lugar de `/`).
>
> ```python
> resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
> self.assertRedirects(resp, '/catalog/')
> ```

Copie las dos últimas funciones en la clase, como se ve a continuación. Estos nuevamente prueban las solicitudes 'POST', pero en este caso con fechas de renovación no válidas. Usamos `assertFormError()` para verificar que los mensajes de error sean los esperados.

```python
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='12345')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':date_in_past} )
        self.assertEqual( resp.status_code,200)
        self.assertFormError(resp, 'form', 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='12345')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        resp = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':invalid_date_in_future} )
        self.assertEqual( resp.status_code,200)
        self.assertFormError(resp, 'form', 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

El mismo tipo de técnicas se pueden utilizar para probar otra vista.

### Plantillas

Django proporciona una API de prueba para verificar que sus vistas estén llamando a la plantilla correcta y para permitirle verificar que se está enviando la información correcta. Sin embargo, no hay soporte de API específico para probar en Django que su salida HTML se represente como se esperaba.

## Otras herramientas de prueba recomendadas

El _framework_ de prueba de Django puede ayudarlo a escribir pruebas unitarias y de integración efectivas: solo hemos arañado la superficie de lo que puede hacer el _framework_ **unittest** subyacente, y mucho menos las adiciones de Django (por ejemplo, vea cómo puede usar [unittest.mock](https://docs.python.org/3.5/library/unittest.mock-examples.html) para parchear bibliotecas de terceros para que pueda probar más a fondo su propio código).

Si bien existen muchas otras herramientas de prueba que puede usar, solo destacaremos dos:

- [Coverage](http://coverage.readthedocs.io/en/latest/): esta herramienta de Python informa sobre la cantidad de su código que realmente ejecutan sus pruebas. Es particularmente útil cuando está comenzando y está tratando de averiguar exactamente lo que debe probar.
- [Selenium](/es/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) es un _framework_ para automatizar las pruebas en un navegador real. Le permite simular a un usuario real interactuando con el sitio y proporciona un excelente marco para probar el sistema de su sitio (el siguiente paso de las pruebas de integración.

## Reto para mi mismo

Hay muchos más modelos y vistas que podemos probar. Como tarea sencilla, intente crear un caso de prueba para la vista `AuthorCreate`.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = '__all__'
    initial={'date_of_death':'12/10/2016',}
    permission_required = 'catalog.can_mark_returned'
```

Recuerda que debes revisar todo lo que especifiques o que sea parte del diseño. Esto incluirá quién tiene acceso, la fecha inicial, la plantilla utilizada y hacia dónde se redirige la vista en caso de éxito.

## Resumen

Escribir código de prueba no es divertido ni glamoroso y, en consecuencia, a menudo se deja para el final (o no se deja) cuando se crea un sitio web. Sin embargo, es una parte esencial para asegurarse de que su código sea seguro para publicar después de realizar cambios y rentable para mantener.

En este tutorial, le mostramos cómo escribir y ejecutar pruebas para sus modelos, formularios y vistas. Lo que es más importante, proporcionamos un breve resumen de lo que debe probar, que a menudo es lo más difícil de resolver cuando comienza. Hay mucho más que saber, pero incluso con lo que ya ha aprendido, debería poder crear pruebas unitarias efectivas para sus sitios web.

El siguiente y último tutorial muestra cómo puede implementar su maravilloso (¡y completamente probado!) sitio web de Django.

## Véase también

- [Escribir y ejecutar pruebas](https://docs.djangoproject.com/en/1.10/topics/testing/overview/) (Documentos de Django)
- [Escribiendo tu primera aplicación Django, parte 5 > Presentando pruebas automatizadas](https://docs.djangoproject.com/en/1.10/intro/tutorial05/) (Documentos de Django)
- [Referencia de herramientas de prueba](https://docs.djangoproject.com/en/1.10/topics/testing/tools/) (Documentos de Django)
- [Temas de pruebas avanzadas](https://docs.djangoproject.com/en/1.10/topics/testing/advanced/) (Documentos de Django)
- [Una guía para probar en Django](http://toastdriven.com/blog/2011/apr/10/guide-to-testing-in-django/) (Blog Toast Driven, 2011)
- [Taller: Desarrollo web basado en pruebas con Django](http://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Pruebas en Django (Parte 1) - Mejores prácticas y ejemplos](https://realpython.com/blog/python/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
