import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagetwoPage } from './pagetwo.page';

describe('PagetwoPage', () => {
  let component: PagetwoPage;
  let fixture: ComponentFixture<PagetwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagetwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
