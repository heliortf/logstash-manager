import { LogstashManagerPage } from './app.po';

describe('logstash-manager App', () => {
  let page: LogstashManagerPage;

  beforeEach(() => {
    page = new LogstashManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
