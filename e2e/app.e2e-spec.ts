import { StevenJacksonCvPage } from './app.po';

describe('steven-jackson-cv App', () => {
  let page: StevenJacksonCvPage;

  beforeEach(() => {
    page = new StevenJacksonCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
