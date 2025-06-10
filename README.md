<h1>Accessible Web Design - Contact Form Challenge ♿</h1>
<h2>Overview</h2>
<p>
  This project is part of the <strong>"Learn Accessible Web Design"</strong> module in the <strong>Frontend Development</strong> specialization course offered by <strong>Scrimba</strong>. The challenge focuses on building a contact form where the <strong>submit button remains disabled until all fields are completed</strong>. This ensures that users can only send their information once the required inputs are provided.
</p>
<p>
  One of the critical aspects of this project is the <strong>method used to inform users about the disabled submit button</strong>—a tooltip that appears when the user hovers over the submit button. This is a common approach in many web designs; however, it <strong>violates accessibility best practices.</strong>.
</p>
<p>
  This challenge offers valuable insights into <strong>real-world accessibility issues</strong> and encourages improvements in UI design to ensure web applications are usable by <strong>everyone, regardless of their device or abilities</strong>.
</p>
<h2>Features ✨</h2>
<p>
  ✅ <strong>User-friendly contact form</strong> with clear labels and structured input fields.
</p>
<p>
  ✅ <strong>Real-time validation</strong>, preventing empty submissions.
</p>
<p>
  ✅ <strong>Popover message for guidance</strong>, alerting users about incomplete forms.
</p>
<h2>Technologies Used 🛠️</h2>
<p>
  🎨 <strong>CSS3</strong> – Styled components for clarity and usability.
</p>
<p>
  ⚡ <strong>JavaScript (ES6)</strong> – Event handling and form validation logic.
</p>
<p>
  🖥️ <strong>HTML5</strong> – Semantic structure for accessibility improvements.
</p>
<h2>How It Works ⚡</h2>
<p>
  📌 <strong>Form Validation:</strong>
</p>
<ul>
  <li>
    Uses JavaScript to detect <strong>empty fields</strong> and <strong>enable the submit button</strong> only when all inputs are filled.
  </li>
</ul>
<p>
  📌 <strong>Interactive Elements:</strong>
</p>
<ul>
  <li>
    The radio buttons allow users to select predefined responses (Yes/No).
  </li>
  <li>
    The city dropdown ensures standardization of location input.
  </li>
</ul>
<p>
  📌 <strong>Accessibility Considerations:</strong>
</p>
<ul>
  <li>
    Labels and placeholders enhance <strong>screen reader compatibility</strong>.
  </li>
  <li>
    The popover message <strong>warns users</strong> about incomplete forms before submission.
  </li>
</ul>
<h2>Accessibility Concerns ⚠️</h2>
<p>
  This project implements a <strong>popover message</strong> when hovering over the disabled <strong>"Send message"</strong> button using the <code>mouseover</code> and <code>mouseout</code> events. However, <strong>this approach may negatively impact accessibility</strong>, particularly for:
  <ul>
    <li>
      <strong>Keyboard users</strong> who <strong>don’t use a mouse</strong>, making it difficult to trigger the popover.
    </li>
    <li>
      <strong>Touchscreen users</strong>, as hovering is not an option for mobile interactions.
    </li>
    <li>
      <strong>Screen readers</strong>, which may not properly announce the warning without explicit focus.
    </li>
  </ul>
</p>
<p>
  💡 A more accessible approach would be to <strong>display the message persistently</strong> near the button or utilize <strong>ARIA live regions</strong> to inform users when input is incomplete.
</p>
