---
title: ARIA Live Regions
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
translation_of: Web/Accessibility/ARIA/ARIA_Live_Regions
---
<h2 id="Introduction_2"><span class="mw-headline" id="Introduction">Introduction </span></h2>

<p>In the past, a web page change could only be spoken in entirety which often annoyed a user, or by speaking very little to nothing, making some or all information inaccessible. Until recently, screen readers have not been able to improve this because no standardized markup existed to alert the screen reader to a change. ARIA live regions fill this gap and provide suggestions to screen readers regarding whether and how to interrupt users with a change.</p>

<h2 id="Simple_Live_Regions"><span class="mw-headline" id="Live_Region_State">Simple Live Regions</span></h2>

<p>Dynamic content which updates without a page reload is generally either a region or a widget. Simple content changes which are not interactive should be marked as live regions. Below is a list of each related ARIA live region property with a description.</p>

<ol>
 <li><strong>aria-live</strong>: The aria-live=POLITENESS_SETTING is used to set the priority with which screen reader should treat updates to live regions - the possible settings are: off/polite/assertive. The default setting is 'off'. This attribute is by far the most important.</li>
 <li>
  <p class="comment"><strong>aria-controls</strong>: The aria-controls=[IDLIST] is used to associate a control with the regions that it controls. Regions are identified just like an ID in a div, and multiple regions can be associated with a control using a space, e.g. aria-controls="myRegionID1 myRegionsID2".</p>

  <div class="warning">Not known if the aria-controls aspect of live regions is implemented in current ATs, or which. Needs research.</div>
 </li>
</ol>

<p>Normally, only aria-live="polite" is used. Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle.</p>

<p>For regions which are not important, or would be annoying because of rapid updates or other reasons, silence them with aria-live="off".</p>

<h3 id="Simple_Use_Case_combobox_updates_useful_on-screen_information">Simple Use Case: combobox updates useful on-screen information</h3>

<p>A website specializing in providing information about birds provides a drop down box. When a bird is selected from the drop down, a region on the page is updated with details about the type of bird selected.</p>

<p><code>&lt;select size="1" id="bird-selector" aria-controls="bird-info"&gt;&lt;option&gt; .... &lt;/select&gt;</code></p>

<p><code>&lt;div role="region" id="bird-info" aria-live="polite"&gt;</code></p>

<p>As the user selects a new bird, the info is spoken. Because "polite" is chosen, the screen reader will wait until the user pauses. Thus, moving down the list will not speak every bird the user visits, only the one finally chosen.</p>

<h2 id="Preferring_Specialized_Live_Region_Roles">Preferring Specialized Live Region Roles</h2>

<p>In the following well-known predefined cases it is better to use a specific provided "live region role":</p>

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Role</th>
   <th scope="col">Description</th>
   <th scope="col">Compatibility Notes</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat, error, game or other type of log</td>
   <td>To maximize compatibility, add a redundant aria-live="polite" when using this role.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>A status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status.</td>
   <td>To maximize compatibility, add a redundant aria-live="polite" when using this role.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. (TBD: link to ARIA form tutorial with aria info)</td>
   <td>To maximize compatibility, some people recommend adding a redundant aria-live="assertive" when using this role. However, adding both aria-live and role=alert causes double speaking issues in VoiceOver on iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>A hybrid between a widget and a live region. Use this with aria-valuemin, aria-valuenow and aria-valuemax. (TBD: add more info here).</td>
   <td> </td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>for text which scrolls, such as a stock ticker.</td>
   <td> </td>
  </tr>
  <tr>
   <td>timer</td>
   <td>or any kind of timer or clock, such as a countdown timer or stopwatch readout.</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Advanced_Live_Regions">Advanced Live Regions</h2>

<p>(TBD: what is supported where?)</p>

<ol>
 <li><strong>aria-atomic</strong>: The aria-atomic=BOOLEAN is used to set whether or not the screen reader should always present the live region as a whole, even if only part of the region changes - the possible settings are false/true where false is the default.</li>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute" title="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute"><strong>aria-relevant</strong></a>: The aria-relevant=[LIST_OF_CHANGES] is used to set what types of changes are relevant to a live region - the possible settings are additions/removals/text/all where "additions text" is the default.</li>
 <li><strong>aria-labelledby</strong>: The aria-labelledby=[IDLIST] is used to associate a region with its labels, similar to aria-controls but instead associating labels to the region and again label identifiers are separated with a space.</li>
 <li><strong>aria-describedby</strong>: The aria-describedby=[IDLIST] is used to associate a region with its descriptions, similar to aria-controls but instead associating descriptions to the region and description identifiers are separated with a space.</li>
</ol>

<h3 id="Advanced_Use_Case_Roster"><span class="mw-headline" id="Use_Case:_Roster">Advanced Use Case: Roster</span></h3>

<p>A chat site would like to display a list of users currently logged on. Display a list of users where a user's log-in and log-out status will be reflected dynamically (without a page reload).</p>

<pre>&lt;ul id="roster" aria-live="polite" aria-relevant="additions removals"&gt;
	&lt;!-- use JavaScript to add remove users here--&gt;
&lt;/ul&gt;
</pre>

<p>Breakdown of ARIA live properties:</p>

<ul>
 <li>aria-live="polite" indicates that the screen reader should wait until the user is idle before presenting updates to the user. This is the most commonly used value, as interrupting the user with "assertive" might interrupt their flow.</li>
 <li>aria-atomic is not set ("false" by default) so that only the added or removed users should be spoken and not the entire roster each time.</li>
 <li>aria-relevant="additions removals" ensures that both users added or removed to the roster will be spoken.</li>
</ul>

<p>TBD: Realistic use case for aria-atomic="true"</p>
