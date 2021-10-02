---
title: Utiliser des contrôleurs de réalité virtuelle pour du WebVR
slug: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
translation_of: Web/API/WebVR_API/Using_VR_controllers_with_WebVR
original_slug: Web/API/WebVR_API/Utiliser_des_contrôleurs_de_realite_virtuelle_pour_du_WebVR
---
<div>{{APIRef("WebVR API")}}</div>

<p>La plupart des matériels de WebVR possède des contrôleurs qui viennent avec le casque de réalité virtuelle. Ceux-ci peuvent être utilisés dans les application WebVR grâce à l'<a href="/en-US/docs/Web/API/Gamepad_API">API Gamepad</a>, et plus spécifiquement avec l'<a href="/en-US/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions">API Gamepad Extensions</a> qui ajoute des API pour accéder, entre autres, à la <a href="/en-US/docs/Web/API/GamepadPose">position du controller</a>, au <a href="/en-US/docs/Web/API/GamepadHapticActuator">retour haptique</a>, etc.. Cet article fournit les bases pour utiliser ces API.</p>

<h2 id="L'API_WebVR">L'API WebVR</h2>

<p>L'<a href="/en-US/docs/Web/API/WebVR_API">API WebVR</a> est jeune mais possède déjà des fonctionnalités très interressantes pour le web et pour que les développeur·euse·s puisse créer des expériences de réalité virtuelle sur le web. Cela est possible grâce à un accès aux données des casques de réalité virtuelle connectés à votre ordinateur. Ceux-ci seront indentifié comme des objets {{domxref("VRDisplay")}},que vous pourrez manipuler pour commencer et arrêter l'affichage dans le casque, récupérer des données de mouvement (orientation, position...) qui pourront être utilisés pour mettre à jour l'affichage d'une animation, par exemple.</p>

<p>Avant de commencer, vous devriez être déjà avoir des bases de l'API WebVR. Si ce n'est pas le cas, allez lire l'article <a href="/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API">Utiliser l'API WebVR</a>, vous aurez également des détails sur la compatibilité des navigateurs web ou du matériel nécessaire.</p>

<h2 id="L'API_Gamepad">L'API Gamepad</h2>

<p>L'<a href="/en-US/docs/Web/API/Gamepad_API">API Gamepad</a> est une API assez bien compatible, qui donne aux développeur·euse·s l'accès aux manettes de jeu, connectés à leur ordinateur et de les utilisé dans dans applications web. Les contrôleurs peuvent basiquement être accessible comme des objets {{domxref("Gamepad")}}, avec lesquels nous pouvons faire des requêtes pour savoir quels boutons sont appuyés ou quels joystick sont actionnés, etc..</p>

<p>Vous pouvez avoir plus d'information sur l'usage de API de base des Gamepad avec l'article <a href="/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API">Utilisez l'API Gamepad</a>, et <a href="/en-US/docs/Games/Techniques/Controls_Gamepad_API">Implementer des contrôles en utilisant l'API Gamepad</a>.</p>

<p>Dans cet article, nous allons nous attardez sur les nouvelles fonctionnalités offertes dans l'API {{specname("GamepadExtensions")}}, laquelle donne accès à des informations avancés comme des données de position ou d'orientation, ou encore contrôler les retours haptiques (vibrations), et bien plus. Cette API est toute nouvelle et, pour l'instant, seulement disponible dans les versions Beta ou Nightly de Firefox 55 (et suppérieur).</p>

<h2 id="Types_de_contrôlleurs">Types de contrôlleurs</h2>

<p>Il y a deux principaux types de contrôleurs utilisés pour la réalité virtuelle :</p>

<ul>
 <li>les "6DoF" (six degrés de liberté) sont des contrôleurs qui donne accès aux informations de position et d'orientation. Un exemple notable serait les manettes du HTC Vive.</li>
 <li>les "3DoF" (trois degrés de liberté) sont des contrôleurs qui donne uniquement accès aux informations d'orientation. Un exemple notable serait la manette du Google Daydream, qui peut être tourné pour sélectionner des objets 3D comme un pointeur laser, mais ne peux être bougé dans la scène 3D.</li>
</ul>

<h2 id="Basic_controller_access">Basic controller access</h2>

<p>Now onto some code. Let's look first at the basics of how we get access to VR controllers with the Gamepad API. There are a few strange nuances to bear in mind here, so it is worth taking a look.</p>

<p>We've written up a simple example to demonstrate — see our <a href="https://github.com/mdn/webvr-tests/blob/master/vr-controller-basic-info/index.html">vr-controller-basic-info</a> source code (<a href="https://mdn.github.io/webvr-tests/vr-controller-basic-info/">see it running live here also</a>). This demo simply outputs information on the VR displays and gamepads connected to your computer.</p>

<h3 id="Getting_the_display_information">Getting the display information</h3>

<p>The first notable code is as follows:</p>

<pre class="brush: js">var initialRun = true;

if(navigator.getVRDisplays &amp;&amp; navigator.getGamepads) {
  info.textContent = 'WebVR API and Gamepad API supported.'
  reportDisplays();
} else {
  info.textContent = 'WebVR API and/or Gamepad API not supported by this browser.'
}</pre>

<p>Here we first use a tracking variable, <code>initialRun</code>, to note that this is the first time we have loaded the page. You'll find out more about this later on. Next, we detect to see if the WebVR and Gamepad APIs are supported by cheking for the existence of the {{domxref("Navigator.getVRDisplays()")}} and {{domxref("Navigator.getGamepads()")}} methods. If so, we run our <code>reportDisplays()</code> custom function to start the process off. This function looks like so:</p>

<pre class="brush: js">function reportDisplays() {
  navigator.getVRDisplays().then(function(displays) {
      console.log(displays.length + ' displays');
    for(var i = 0; i &lt; displays.length; i++) {
      var cap = displays[i].capabilities;
      // cap is a VRDisplayCapabilities object
      var listItem = document.createElement('li');
      listItem.innerHTML = '&lt;strong&gt;Display ' + (i+1) + '&lt;/strong&gt;'
                   + '&lt;br&gt;VR Display ID: ' + displays[i].displayId
                   + '&lt;br&gt;VR Display Name: ' + displays[i].displayName
                   + '&lt;br&gt;Display can present content: ' + cap.canPresent
                   + '&lt;br&gt;Display is separate from the computer\'s main display: ' + cap.hasExternalDisplay
                   + '&lt;br&gt;Display can return position info: ' + cap.hasPosition
                   + '&lt;br&gt;Display can return orientation info: ' + cap.hasOrientation
                   + '&lt;br&gt;Display max layers: ' + cap.maxLayers;
      list.appendChild(listItem);
    }

    setTimeout(reportGamepads, 1000);
    // For VR, controllers will only be active after their corresponding headset is active
  });
}</pre>

<p>This function first uses the promise-based {{domxref("Navigator.getVRDisplays()")}} method, which resolves with an array containing {{domxref("VRDisplay")}} objects representing the connected displays. Next, it prints out each display's {{domxref("VRDisplay.displayId")}} and {{domxref("VRDisplay.displayName")}} values, and a number of useful values contained in the display's associated {{domxref("VRCapabilities")}} object. The most useful of these are {{domxref("VRCapabilities.hasOrientation","hasOrientation")}} and {{domxref("VRCapabilities.hasPosition","hasPosition")}}, which allow you to detect whether the device can return orientation and position data and set up your app accordingly.</p>

<p>The last line contained in this function is a {{domxref("WindowOrWorkerGlobalScope.setTimeout()")}} call, which runs the <code>reportGamepads()</code> function after a 1 second delay. Why do we need to do this? First of all, VR controllers will only be ready after their associated VR headset is active, so we need to invoke this after <code>getVRDisplays()</code> has been called and returned the display information. Second, the Gamepad API is much older than the WebVR API, and not promise-based. As you'll see later, the <code>getGamepads()</code> method is synchronous, and just returns the <code>Gamepad</code> objects immediately — it doesn't wait for the controller to be ready to report information. Unless you wait for a little while, returned information may not be accurate (at least, this is what we found in our tests).</p>

<h3 id="Getting_the_Gamepad_information">Getting the Gamepad information</h3>

<p>The <code>reportGamepads()</code> function looks like this:</p>

<pre class="brush: js">function reportGamepads() {
    var gamepads = navigator.getGamepads();
    console.log(gamepads.length + ' controllers');
    for(var i = 0; i &lt; gamepads.length; ++i) {
        var gp = gamepads[i];
    var listItem = document.createElement('li');
    listItem.classList = 'gamepad';
    listItem.innerHTML = '&lt;strong&gt;Gamepad ' + gp.index + '&lt;/strong&gt; (' + gp.id + ')'
                 + '&lt;br&gt;Associated with VR Display ID: ' + gp.displayId
                 + '&lt;br&gt;Gamepad associated with which hand: ' + gp.hand
                 + '&lt;br&gt;Available haptic actuators: ' + gp.hapticActuators.length
                 + '&lt;br&gt;Gamepad can return position info: ' + gp.pose.hasPosition
                 + '&lt;br&gt;Gamepad can return orientation info: ' + gp.pose.hasOrientation;
    list.appendChild(listItem);
  }
  initialRun = false;
}</pre>

<p>This works in a similar manner to <code>reportDisplays()</code> — we get an array of {{domxref("Gamepad")}} objects using the non-promise-based <code>getGamepads()</code> method, then cycle through each one and print out information on each:</p>

<ul>
 <li>The {{domxref("Gamepad.displayId")}} property is the same as the <code>displayId</code> of the headet the controller is associated with, and therefore useful for tying controller and headset information together.</li>
 <li>The {{domxref("Gamepad.index")}} property is unique numerical index that identifies each connected controller.</li>
 <li>{{domxref("Gamepad.hand")}} returns which hand the controller is expected to be held in.</li>
 <li>{{domxref("Gamepad.hapticActuators")}} returns an array of the haptic actuators available in the controller. Here we are returning its length so we can see how many each has available.</li>
 <li>Finally, we return {{domxref("GamepadPose.hasPosition")}} and {{domxref("GamepadPose.hasOrientation")}} to show whether the controller can return position and orientation data. This works just the same as for the displays, except that in the case of gamepads these values are available on the pose object, not the capabilities object.</li>
</ul>

<p>Note that we also gave each list item containing controller information a class name of <code>gamepad</code>. We'll explain what this is for later.</p>

<p>The last thing to do here is set the <code>initialRun</code> variable to <code>false</code>, as the initial run is now over.</p>

<h3 id="Gamepad_events">Gamepad events</h3>

<p>To finish off this section, we'll look at the gamepad-associated events. There are two we need concern ourselves with — {{event("gamepadconnected")}} and {{event("gamepaddisconnected")}} — and it is fairly obvious what they do.</p>

<p>At the end of our example we first include the <code>removeGamepads()</code> function:</p>

<pre class="brush: js">function removeGamepads() {
    var gpLi = document.querySelectorAll('.gamepad');
    for(var i = 0; i &lt; gpLi.length; i++) {
    list.removeChild(gpLi[i]);
    }

    reportGamepads();
}</pre>

<p>This function simply grabs references to all list items with a class name of <code>gamepad</code>, and removes them from the DOM. Then it re-runs <code>reportGamepads()</code> to populate the list with the updated list of connected controllers.</p>

<p><code>removeGamepads()</code> will be run each time a gamepad is connected or disconnected, via the following event handlers:</p>

<pre class="brush: js">window.addEventListener('gamepadconnected', function(e) {
  info.textContent = 'Gamepad ' + e.gamepad.index + ' connected.';
  if(!initialRun) {
      setTimeout(removeGamepads, 1000);
  }
});

window.addEventListener('gamepaddisconnected', function(e) {
  info.textContent = 'Gamepad ' + e.gamepad.index + ' disconnected.';
  setTimeout(removeGamepads, 1000);
});</pre>

<p>We have <code>setTimeout()</code> calls in place here — like we did with the initialization code at the top of the script — to make sure that the gamepads are ready to report their information when <code>reportGamepads()</code> is called in each case.</p>

<p>But there's one more thing to note — you'll see that inside the <code>gamepadconnected</code> handler, the timeout is only run if <code>initialRun</code> is <code>false</code>. This is because if your gamepads are connected when the document first loads, <code>gamepadconnected</code> is fired once for each gamepad, therefore <code>removeGamepads()</code>/<code>reportGamepads()</code> will be run several times. This could lead to inaccurate results, therefore we only want to run <code>removeGamepads()</code> inside the <code>gamepadconnected</code> handler after the initial run, not during it. This is what <code>initialRun</code> is for.</p>

<h2 id="Introducing_a_real_demo">Introducing a real demo</h2>

<p>Now let's look at the Gamepad API being used inside a real WebVR demo. You can find this demo at <a href="https://github.com/mdn/webvr-tests/tree/master/raw-webgl-controller-example">raw-webgl-controller-example</a> (<a href="https://mdn.github.io/webvr-tests/raw-webgl-controller-example/">see it live here also</a>).</p>

<p>In exactly the same way as our <a href="https://github.com/mdn/webvr-tests/tree/master/raw-webgl-example">raw-webgl-example</a> (see <a href="/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API">Using the WebVR API</a> for details), this renders a spinning 3D cube, which you can choose to present in a VR display. The only difference is that, while in VR presenting mode, this demo allows you to move the cube by moving a VR controller (the original demo moves the cube as you move your VR headset).</p>

<p>We'll explore the code differences in this version below — see <a href="https://github.com/mdn/webvr-tests/blob/master/raw-webgl-controller-example/webgl-demo.js">webgl-demo.js</a>.</p>

<h3 id="Accessing_the_gamepad_data">Accessing the gamepad data</h3>

<p>Inside the <code>drawVRScene()</code> function, you'll find this bit of code:</p>

<pre class="brush: js">var gamepads = navigator.getGamepads();
var gp = gamepads[0];

if(gp) {
  var gpPose = gp.pose;
  var curPos = gpPose.position;
  var curOrient = gpPose.orientation;
  if(poseStatsDisplayed) {
    displayPoseStats(gpPose);
  }
}</pre>

<p>Here we get the connected gamepads with {{domxref("Navigator.getGamepads")}}, then store the first gamepad detected in the <code>gp</code> variable. As we only need one gamepad for this demo, we'll just ignore the others.</p>

<p>The next thing we do is to get the {{domxref("GamepadPose")}} object for the controller stored in gpPose (by querying {{domxref("Gamepad.pose")}}), and also store the current gamepad position and orientation for this frame in variables so they are easuy to access later. We also display the post stats for this frame in the DOM using the <code>displayPoseStats()</code> function. All of this is only done if <code>gp</code> actually has a value (if a gamepad is connected), which stops the demo erroring if we don't have our gamepad connected.</p>

<p>Slightly later in the code, you can find this block:</p>

<pre class="brush: js">if(gp &amp;&amp; gpPose.hasPosition) {
  mvTranslate([
                0.0 + (curPos[0] * 15) - (curOrient[1] * 15),
                0.0 + (curPos[1] * 15) + (curOrient[0] * 15),
                -15.0 + (curPos[2] * 25)
             ]);
} else if(gp) {
  mvTranslate([
                0.0 + (curOrient[1] * 15),
                0.0 + (curOrient[0] * 15),
                -15.0
             ]);
} else {
  mvTranslate([
                0.0,
                0.0,
                -15.0
             ]);
}</pre>

<p>Here we alter the position of the cube on the screen according to the {{domxref("GamepadPose.position","position")}} and {{domxref("GamepadPose.orientation","orientation")}} data received from the connected controller. These values (stored in <code>curPos</code> and <code>curOrient</code>) are {{domxref("Float32Array")}}s containing the X, Y, and Z values (here we are just using [0] which is X, and [1] which is Y).</p>

<p>If the <code>gp</code> variable has a <code>Gamepad</code> object inside it and it can return position values (<code>gpPose.hasPosition</code>), indicating a 6DoF controller, we modify the cube position using position and orientation values. If only the former is true, indicating a 3DoF controller, we modify the cube position using the orientation values only. If there is no gamepad connected, we don't modify the cube position at all.</p>

<h3 id="Displaying_the_gamepad_pose_data">Displaying the gamepad pose data</h3>

<p>In the <code>displayPoseStats()</code> function, we grab all of the data we want to display out of the {{domxref("GamepadPose")}} object passed into it, then print them into the UI panel that exists in the demo for displaying such data:</p>

<pre class="brush: js">function displayPoseStats(pose) {
  var pos = pose.position;
  var orient = pose.orientation;
  var linVel = pose.linearVelocity;
  var linAcc = pose.linearAcceleration;
  var angVel = pose.angularVelocity;
  var angAcc = pose.angularAcceleration;

  if(pose.hasPosition) {
    posStats.textContent = 'Position: x ' + pos[0].toFixed(3) + ', y ' + pos[1].toFixed(3) + ', z ' + pos[2].toFixed(3);
  } else {
    posStats.textContent = 'Position not reported';
  }

  if(pose.hasOrientation) {
    orientStats.textContent = 'Orientation: x ' + orient[0].toFixed(3) + ', y ' + orient[1].toFixed(3) + ', z ' + orient[2].toFixed(3);
  } else {
    orientStats.textContent = 'Orientation not reported';
  }

  linVelStats.textContent = 'Linear velocity: x ' + linVel[0].toFixed(3) + ', y ' + linVel[1].toFixed(3) + ', z ' + linVel[2].toFixed(3);
  angVelStats.textContent = 'Angular velocity: x ' + angVel[0].toFixed(3) + ', y ' + angVel[1].toFixed(3) + ', z ' + angVel[2].toFixed(3);

  if(linAcc) {
    linAccStats.textContent = 'Linear acceleration: x ' + linAcc[0].toFixed(3) + ', y ' + linAcc[1].toFixed(3) + ', z ' + linAcc[2].toFixed(3);
  } else {
    linAccStats.textContent = 'Linear acceleration not reported';
  }

  if(angAcc) {
    angAccStats.textContent = 'Angular acceleration: x ' + angAcc[0].toFixed(3) + ', y ' + angAcc[1].toFixed(3) + ', z ' + angAcc[2].toFixed(3);
  } else {
    angAccStats.textContent = 'Angular acceleration not reported';
  }
}</pre>

<p>This article has given you a very basic idea of how to use the Gamepad Extensions to use VR controllers inside WebVR apps. In a real app you'd probably have a much more complex control system in effect, with controls assigned to the buttons on the VR controllers, and the display being affected by both the display pose and the controller poses simultaneously. Here however, we just wanted to isolate the pure Gamepad Extensions parts of that.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a></li>
 <li><a href="/en-US/docs/Web/API/Gamepad_API">Gamepad API</a></li>
 <li><a href="/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API">Using the WebVR API</a></li>
 <li><a href="/en-US/docs/Games/Techniques/Controls_Gamepad_API">Implementing controls using the Gamepad API</a></li>
</ul>
