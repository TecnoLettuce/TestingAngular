import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser"; // Este import es imprescindible para buscar por id

import { SecondComponentComponent } from './second-component.component';

describe('SecondComponentComponent', () => {
  let component: SecondComponentComponent;
  let fixture: ComponentFixture<SecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Lo primero es que el componente se cree correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Lo segundo es comprobar que el token se reciba con normalidad en el onInit
  it('should render token in a p tag',()=>{
    const fixture = TestBed.createComponent(SecondComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toBeNull();
  })

  // Pruebas para recoger un elemento de un test por su id
  it('should get element by id and not be null', () => {
    const fixture = TestBed.createComponent(SecondComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#test').textContent).toContain('Esto es para probar a coger por id');
  })
});
