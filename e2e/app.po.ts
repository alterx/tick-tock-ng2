export class TickTockNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tick-tock-ng2-app h1')).getText();
  }
}
