import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => { // Comprueba si la app se crea
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TestApp'`, () => { // Comprueba si el título se obtiene con normalidad
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pruebas');
  });

  it('should render title in a h1 tag', () => { // Comprueba que se renderiza el titulo en su h1 correspondiente
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Pruebas');
  });

  // Para probar el h3
  it('sould render some text in a h3 tag', () => { // Comprueba que las etiquetas secundarias también funcionan
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('h3'); // Se le puede poner solo una palabra o conjunto de caracteres que deba contender y funciona
  });
});
