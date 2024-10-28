const styles = '* { box-sizing: border-box; } :host { box-sizing: border-box; display: inline-block; max-width: 100%; } .wrapper { background: rgb(255, 255, 255); flex-direction: row; padding: 0 0.5rem; position: relative; width: 100%; align-items: center; display: flex; } slot { display: inline-flex; } slot:not([name]) { display: inline-block; flex-grow: 1; } slot:not([name])::slotted(select) { -webkit-appearance: none; appearance: none; background: rgb(255, 255, 255); border: 0; color: rgb(17, 17, 17); flex-grow: 1; font-size: 1rem; line-height: 1.5; min-height: 3rem; outline: none; padding: 0.75rem 0; padding-inline-end: 2.5rem !important; padding-inline-start: 0; white-space: normal; width: 100%; } slot[name="label"] { display: block; } .wrapper:after { border: 1px solid rgb(146, 146, 146); border-radius: 4px; bottom: 0; box-sizing: border-box; content: " "; display: block; left: 0; pointer-events: none; position: absolute; top: 0; transition: box-shadow 0.1s cubic-bezier(0.4, 0, 0.4, 1), border 0.1s cubic-bezier(0.4, 0, 0.4, 1); width: 100%; } slot[name="action"] { margin-inline-start: 0.25rem; } slot[name="label"]::slotted(label) { display: block; font-size: 0.875rem; line-height: 1.571; margin: 0 0 0.125rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }';
const lightStyleSheet = 'custom-select select { overflow: hidden; text-overflow: ellipsis; } custom-select optgroup { color: rgb(72, 72, 72); }';

class CustomSelect extends HTMLElement {
  constructor() {
    // @ts-ignore
    super(...arguments);

    const shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
    // @ts-ignore
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        ${styles} 
      </style>
      <slot name="label"></slot>
      <div class="wrapper">
        <slot></slot>
      </div>
      <slot name="light-styles"></slot>
    `;

    shadow.append(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    const lightStyles = document.createElement('style');
    lightStyles.slot = 'light-styles';
    lightStyles.innerHTML = lightStyleSheet;
    this.append(lightStyles.cloneNode(true));
  }
}

customElements.define(`custom-select`, CustomSelect);