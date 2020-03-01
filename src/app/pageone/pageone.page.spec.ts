import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageonePage } from './pageone.page';

describe('PageonePage', () => {
  let component: PageonePage;
  let fixture: ComponentFixture<PageonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
