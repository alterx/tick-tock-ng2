import { TickTockNg2Page } from './app.po';

describe('tick-tock-ng2 App', function() {
  let page: TickTockNg2Page;

  beforeEach(() => {
    page = new TickTockNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tick-tock-ng2 works!');
  });
});
