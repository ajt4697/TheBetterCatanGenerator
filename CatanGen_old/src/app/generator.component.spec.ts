import { TestBed, async } from '@angular/core/testing';
import { GeneratorComponent } from './generator.component';

describe('GeneratorComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GeneratorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GeneratorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CatanGen'`, () => {
    const fixture = TestBed.createComponent(GeneratorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CatanGen');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(GeneratorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to CatanGen!');
  });
});
