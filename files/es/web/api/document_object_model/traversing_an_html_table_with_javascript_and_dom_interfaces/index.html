---
title: Trazado de una tabla HTML mediante JavaScript y la Interface DOM
slug: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
translation_of: >-
  Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
original_slug: Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
---
<h2 id="Introduction" name="Introduction">Introducción</h2>

<p>Este artículo es un resumen de algunos métodos DOM nivel 1 poderosos y fundamentales así como una descripción de cómo utilizarlos utilizando Javascript.  Aprenderás a crear, accesar, controlar, y remover elementos HTML dinámicamente.  Los métodos DOM presentados aquí no son específicos de HTML; también aplican para XML. Las demostraciones aquí proporcionadas funcionarán en cualquier navegador moderno, incluyendo todas las versiones de Firefox e IE 5+.</p>

<div class="note">Los métodos DOM presentados aquí forman parte del Modelo de Documento basado en Objetos (DOM: Document Object Model por sus siglas en inglés) de especificación nivel 1.  DOM nivel 1 incluye métodos tanto para acceso genérico del documento (DOM 1 Core) así como métodos específicos para documentos HTML (DOM 1 HTML).</div>

<h2 id="Overview_of_Sample1.html" name="Overview_of_Sample1.html">Ejemplo: Crear una tabla HTML dinámicamente (<code>Ejemplo1.html</code>)</h2>

<h3 id="Contenido_HTML">Contenido HTML</h3>

<pre class="brush: html">&lt;input type="button" value="Genera una tabla" onclick="genera_tabla()"&gt;
</pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js">function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento &lt;table&gt; y un elemento &lt;tbody&gt;
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i &lt; 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j &lt; 2; j++) {
      // Crea un elemento &lt;td&gt; y un nodo de texto, haz que el nodo de
      // texto sea el contenido de &lt;td&gt;, ubica el elemento &lt;td&gt; al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el &lt;tbody&gt; debajo del elemento &lt;table&gt;
  tabla.appendChild(tblBody);
  // appends &lt;table&gt; into &lt;body&gt;
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}</pre>

<p>{{ EmbedLiveSample('Overview_of_Sample1.html') }}</p>

<p>Observa cuidadosamente el orden en el que se crearon los elementos en el nodo de texto:</p>

<ol>
 <li>Primero se crea el elemento &lt;table&gt;.</li>
 <li>Posteriormente, creamos el elemento &lt;tbody&gt; , que es el hijo del elemento &lt;table&gt; .</li>
 <li>Después, utilizamos ciclos para crear los elementos &lt;tr&gt;, que son hijos del elemento &lt;tbody&gt;.</li>
 <li>Para cada elemento &lt;tr&gt;, utilizamos nuevamente ciclos para generar los elementos &lt;td&gt; que son hijos de los elementos &lt;tr&gt;.</li>
 <li>Para cada elemento &lt;td&gt;, creamos nodos de texto con el contenido de cada celda.</li>
</ol>

<p>Una vez creados los elementos &lt;table&gt;, &lt;tbody&gt;, &lt;tr&gt;, y &lt;td&gt; así como los nodos de texto, adicionamos a cada hijo bajo su padre en el órden opuesto:</p>

<ol>
 <li>Primero, anexamos cada nodo de texto a su elemento padre &lt;td&gt; :
  <pre>celda.appendChild(textoCelda);</pre>
 </li>
 <li>Posteriormente, anexamos cada elemento &lt;td&gt; a su elemento padre &lt;tr&gt; :
  <pre>hilera.appendChild(celda);</pre>
 </li>
 <li>Posteriomente, anexamos cada elemento &lt;tr&gt; a su elemento padre &lt;tbody&gt;:
  <pre>tblBody.appendChild(hilera);</pre>
 </li>
 <li>Después, anexamos el elemento &lt;tbody&gt; a su elemento padre &lt;table&gt;:
  <pre>tabla.appendChild(tblBody);</pre>
 </li>
 <li>Finalmente, anexamos el elemento &lt;table&gt; a su elemento padre &lt;body&gt;:
  <pre>body.appendChild(tabla);</pre>
 </li>
</ol>

<p>Recuérda esta técnica. Te será muy útil en la programación bajo el estándar W3C DOM. Primero, creas los elementos de arriba a abajo; posteriormente adicionas los hijos a los padres de abajo a arriba.</p>

<p>A continuación aparece el código HTML generado por el código JavaScript:</p>

<pre>...
&lt;table border="2"&gt;
    &lt;tbody&gt;
        &lt;tr&gt;&lt;td&gt;celda en la hilera 0, columna 0&lt;/td&gt;&lt;td&gt;celda en la hilera 0, columna 1&lt;/td&gt;&lt;/tr&gt;
        &lt;tr&gt;&lt;td&gt;celda en la hilera 1, columna 0&lt;/td&gt;&lt;td&gt;celda en la hilera 1, columna 1&lt;/td&gt;&lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
...
</pre>

<p>Aquí está el árbol de objetos DOM generado por el código del elemento &lt;TABLE&gt; :</p>

<p><img alt="Image:sample1-tabledom.jpg" src="/@api/deki/files/833/=Sample1-tabledom.jpg"></p>

<p>Tú puedes construir esta tabla y sus elementos internos utilizando sólo algunos de los varios métodos del DOM. Recuerda tener en mente el modelo de la estructura que planeas crear; esto hará mucho más fácil la escritura del código necesario.</p>

<p>En el árbol del elemento &lt;table&gt; de la Figura 1, el elemento &lt;table&gt; tiene solamente un hijo mientras que &lt;tbody&gt; tiene dos.  A su vez, cada hijo de &lt;tbody&gt; tiene dos hijos. Finalmente, cada elemento &lt;td&gt; tiene sólo uno, el nodo de texto.</p>

<h2 id="Setting_background_of_a_paragraph" name="Setting_background_of_a_paragraph">Ejemplo: Configuración del color de fondo de un párrafo</h2>

<p><code>getElementsByTagName(tagNameValue)</code> es un método disponible en cualquier elemento DOM o el elemento raíz del documento. Cuando se le llama, devolverá una matriz con todos los descendientes de elementos que coincidan con el nombre de la etiqueta. El primer elemento de la lista se encuentra en la posición [0] de la matriz.</p>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;body&gt;
  &lt;input type="button" value="Set paragraph background color" onclick="set_background()"&gt;
  &lt;p&gt;hi&lt;/p&gt;
  &lt;p&gt;hello&lt;/p&gt;
&lt;/body&gt;</pre>

<h3 id="JavaScript_Content_2">JavaScript Content</h3>

<pre class="brush: js">function set_background() {
  // get a list of all the body elements (there will only be one),
  // and then select the zeroth (or first) such element
  myBody = document.getElementsByTagName("body")[0];

  // now, get all the p elements that are descendants of the body
  myBodyElements = myBody.getElementsByTagName("p");

  // get the second item of the list of p elements
  myP = myBodyElements[1];
  myP.style.background = "rgb(255,0,0)";
}</pre>

<p>{{ EmbedLiveSample('Setting_background_of_a_paragraph') }}</p>

<p>En este ejemplo, establecemos la variable <code>myP</code> en el objeto DOM para el segundo elemento<code>p</code> dentro del body:</p>

<ol>
 <li>Primero, obtendremos una lista de todos los elementos body mediante
  <pre>myBody = document.getElementsByTagName("body")[0]</pre>
  Como en cualquier documento HTML sólo hay un elemento body válido, esta lista tendrá sólo un elemento, que recuperamos seleccionando el primer elemento de esa lista usando <code>{{mediawiki.external(0)}}</code>.</li>
 <li>Luego, obtenemos todos los elementos p que son descendientes del body mediante
  <pre>myBodyElements = myBody.getElementsByTagName("p");</pre>
 </li>
 <li>Finalmente, obtenemos el segundo item de la lista de elementos p mediante
  <pre>myP = myBodyElements[1];</pre>
 </li>
</ol>

<p><img alt="Image:sample2a2.jpg" src="/@api/deki/files/834/=Sample2a2.jpg"></p>

<p>Una vez que haya obtenido el objeto DOM para un elemento HTML, puede establecer sus propiedades. Por ejemplo, si desea establecer la propiedad estilo de color de fondo, agregue:</p>

<pre>myP.style.background = "rgb(255,0,0)";
// setting inline STYLE attribute
</pre>

<h3 id="Creating_TextNodes_with_document.createTextNode.28.22...22.29" name="Creating_TextNodes_with_document.createTextNode.28.22...22.29">Creating TextNodes with <code>document.createTextNode("..")</code></h3>

<p>Use the document object to invoke the createTextNode method and create your text node. You just need to pass the text content. The return value is an object that represents the text node.</p>

<pre>myTextNode = document.createTextNode("world");
</pre>

<p>This means that you have created a node of the type TEXT_NODE (a piece of text) whose text data is "world", and myTextNode is your reference to this node object. To insert this text into your HTML page, you need to make this text node a child of some other node element.</p>

<h3 id="Inserting_Elements_with_appendChild.28...29" name="Inserting_Elements_with_appendChild.28...29">Inserting Elements with appendChild(..)</h3>

<p>So, by calling myP.appendChild({{mediawiki.external('node_element')}}), you are making the element a new child of the second &lt;p&gt; element.</p>

<pre>myP.appendChild(myTextNode);
</pre>

<p>After testing this sample, note that the words hello and world are together: helloworld. So visually, when you see the HTML page it seems like the two text nodes hello and world are a single node, but remember that in the document model, there are two nodes. The second node is a new node of type TEXT_NODE, and it is the second child of the second &lt;p&gt; tag. The following figure shows the recently created Text Node object inside the document tree.</p>

<p><img alt="Image:sample2b2.jpg" src="/@api/deki/files/835/=Sample2b2.jpg"></p>

<div class="note">createTextNode and appendChild is a simple way to include white space between the words hello and world. Another important note is that the appendChild method will append the child after the last child, just like the word world has been added after the word hello. So if you want to append a Text Node between hello and world you will need to use insertBefore instead of appendChild.</div>

<h3 id="Creating_New_Elements_with_the_document_object_and_the_createElement.28...29_method" name="Creating_New_Elements_with_the_document_object_and_the_createElement.28...29_method">Creating New Elements with the document object and the <code>createElement(..)</code> method</h3>

<p>You can create new HTML elements or any other element you want with createElement. For example, if you want to create a new &lt;p&gt; element as a child of the &lt;body&gt; element, you can use the myBody in the previous example and append a new element node. To create a node simply call <code>document.createElement("tagname")</code>. For example:</p>

<pre>myNewPTAGnode = document.createElement("p");
myBody.appendChild(myNewPTAGnode);
</pre>

<p><img alt="Image:sample2c.jpg" src="/@api/deki/files/836/=Sample2c.jpg"></p>

<h3 id="Removing_nodes_with_the_removeChild.28...29_method" name="Removing_nodes_with_the_removeChild.28...29_method">Removing nodes with the <code>removeChild(..)</code> method</h3>

<p>Nodes can be removed. The following code removes text node <code>myTextNode</code> (containing the word "world") from the second <code>&lt;p&gt;</code> element, <code>myP</code>.</p>

<pre>myP.removeChild(myTextNode);
</pre>

<p>Text node <code>myTextNode</code> (containing the word "world") still exists. The following code attaches <code>myTextNode</code> to the recently created <code>&lt;p&gt;</code> element, <code>myNewPTAGnode</code>.</p>

<pre>myNewPTAGnode.appendChild(myTextNode);
</pre>

<p>The final state for the modified object tree looks like this:</p>

<p><img alt="Image:sample2d.jpg" src="/@api/deki/files/837/=Sample2d.jpg"></p>

<h2 id="Creating_a_table_dynamically_.28back_to_Sample1.html.29" name="Creating_a_table_dynamically_.28back_to_Sample1.html.29">Creating a table dynamically (back to Sample1.html)</h2>

<p>For the rest of this article we will continue working with sample1.html. The following figure shows the table object tree structure for the table created in the sample.</p>

<h3 id="Reviewing_the_HTML_Table_structure" name="Reviewing_the_HTML_Table_structure">Reviewing the HTML Table structure</h3>

<p><img alt="Image:sample1-tabledom.jpg" src="/@api/deki/files/833/=Sample1-tabledom.jpg"></p>

<h3 id="Creating_element_nodes_and_inserting_them_into_the_document_tree" name="Creating_element_nodes_and_inserting_them_into_the_document_tree">Creating element nodes and inserting them into the document tree</h3>

<p>The basic steps to create the table in sample1.html are:</p>

<ul>
 <li>Get the body object (first item of the document object).</li>
 <li>Create all the elements.</li>
 <li>Finally, append each child according to the table structure (as in the above figure). The following source code is a commented version for the sample1.html.</li>
</ul>

<div class="note">At the end of the start function there is a new line of code. The table's border property was set using another DOM method, <code>setAttribute</code>. setAttribute has two arguments: the attribute name and the attribute value. You can set any attribute of any element using the setAttribute method.</div>

<pre class="brush:html">&lt;head&gt;
&lt;title&gt;Sample code - Traversing an HTML Table with JavaScript and DOM Interfaces&lt;/title&gt;
&lt;script&gt;
    function start() {
        // get the reference for the body
        var mybody = document.getElementsByTagName("body")[0];

        // creates &lt;table&gt; and &lt;tbody&gt; elements
        mytable     = document.createElement("table");
        mytablebody = document.createElement("tbody");

        // creating all cells
        for(var j = 0; j &lt; 2; j++) {
            // creates a &lt;tr&gt; element
            mycurrent_row = document.createElement("tr");

            for(var i = 0; i &lt; 2; i++) {
                // creates a &lt;td&gt; element
                mycurrent_cell = document.createElement("td");
                // creates a Text Node
                currenttext = document.createTextNode("cell is row " + j + ", column " + i);
                // appends the Text Node we created into the cell &lt;td&gt;
                mycurrent_cell.appendChild(currenttext);
                // appends the cell &lt;td&gt; into the row &lt;tr&gt;
                mycurrent_row.appendChild(mycurrent_cell);
            }
            // appends the row &lt;tr&gt; into &lt;tbody&gt;
            mytablebody.appendChild(mycurrent_row);
        }

        // appends &lt;tbody&gt; into &lt;table&gt;
        mytable.appendChild(mytablebody);
        // appends &lt;table&gt; into &lt;body&gt;
        mybody.appendChild(mytable);
        // sets the border attribute of mytable to 2;
        mytable.setAttribute("border","2");
    }
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="start()"&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="Manipulating_the_table_with_DOM_and_CSS" name="Manipulating_the_table_with_DOM_and_CSS">Manipulating the table with DOM and CSS</h2>

<h3 id="Getting_a_text_node_from_the_table" name="Getting_a_text_node_from_the_table">Getting a text node from the table</h3>

<p>This example introduces two new DOM attributes. First it uses the <code>childNodes</code> attribute to get the list of child nodes of mycel. The <code>childNodes</code> list includes all child nodes, regardless of what their name or type is. Like getElementsByTagName(), it returns a list of nodes. The differences are that (a) getElementsByTagName() only returns elements of the specified tag name; and (b) getElementsByTagName() returns descendants at any level, not just immediate children. Once you have the returned list, use <code>{{mediawiki.external('x')}}</code> method to retrieve the desired child item. This example stores in myceltext the text node of the second cell in the second row of the table. Then, to display the results in this example, it creates a new text node whose content is the data of myceltext and appends it as a child of the &lt;body&gt; element.</p>

<div class="note">If your object is a text node, you can use the data attribute and retrieve the text content of the node.</div>

<pre class="brush:js">mybody      = document.getElementsByTagName("body")[0];
mytable     = mybody.getElementsByTagName("table")[0];
mytablebody = mytable.getElementsByTagName("tbody")[0];
myrow       = mytablebody.getElementsByTagName("tr")[1];
mycel       = myrow.getElementsByTagName("td")[1];

// first item element of the childNodes list of mycel
myceltext=mycel.childNodes[0];

// content of currenttext is the data content of myceltext
currenttext=document.createTextNode(myceltext.data);
mybody.appendChild(currenttext);
</pre>

<h3 id="Getting_an_attribute_value" name="Getting_an_attribute_value">Getting an attribute value</h3>

<p>At the end of sample1 there is a call to setAttribute on the mytable object. This call was used to set the border property of the table. To retrieve the value of the attribute, use the getAttribute method:</p>

<pre>mytable.getAttribute("border");
</pre>

<h3 id="Hiding_a_column_by_changing_style_properties" name="Hiding_a_column_by_changing_style_properties">Hiding a column by changing style properties</h3>

<p>Once you have the object in your JavaScript variable, you can set style properties directly. The following code is a modified version of sample1.html in which each cell of the second column is hidden and each cell of the first column is changed to have a red background. Note that the style property was set directly.</p>

<pre class="brush:html">&lt;html&gt;
&lt;body onload="start()"&gt;
&lt;/body&gt;
&lt;script&gt;
    function start() {
       var mybody =document.getElementsByTagName("body")[0];
       mytable     = document.createElement("table");
       mytablebody = document.createElement("tbody");

       for(var j = 0; j &lt; 2; j++) {
           mycurrent_row=document.createElement("tr");
           for(var i = 0; i &lt; 2; i++) {
               mycurrent_cell = document.createElement("td");
               currenttext = document.createTextNode("cell is:" + i + j);
               mycurrent_cell.appendChild(currenttext);
               mycurrent_row.appendChild(mycurrent_cell);
               // set the cell background color
               // if the column is 0. If the column is 1 hide the cel
               if (i == 0) {
                   mycurrent_cell.style.background = "rgb(255,0,0)";
               } else {
                   mycurrent_cell.style.display = "none";
               }
           }
           mytablebody.appendChild(mycurrent_row);
       }
       mytable.appendChild(mytablebody);
       mybody.appendChild(mytable);
    }
&lt;/script&gt;
&lt;/html&gt;
</pre>
