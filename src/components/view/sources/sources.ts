import './sources.css';
import './alphabet.css';
import { DataSource } from '../../types/types';

class Sources {
  draw(data: DataSource[]) {
    const fragment = <DocumentFragment>document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');
    const arr: string[] = [];
    data.forEach((item) => {
      arr.push(item.name.slice(0, 1));
      const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

      sourceClone.querySelector('.source__item-name').textContent = item.name;
      sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });
    const frag = <DocumentFragment>document.createDocumentFragment();
    const arrayNews = [...new Set(arr)];
    arrayNews.forEach((item) => {
      const alphabetClone = <HTMLElement>document.createElement('li');
      alphabetClone.classList.add('alphabet__item');
      alphabetClone.textContent = item;
      frag.append(alphabetClone);
    });
    document.querySelector('.alphabet').append(frag);

    document.querySelector('.sources').append(fragment);
    const setAlphabet = document.querySelectorAll('.alphabet__item');
    setAlphabet.forEach((button) => {
      button.addEventListener('click', () => {
        const dataNew: DataSource[] = [];
        data.forEach((item) => {
          if (item.name.slice(0, 1) == button.textContent) {
            document.querySelector('.sources').innerHTML = '';
            dataNew.push(item);
          }
        });
        dataNew.forEach((item) => {
          arr.push(item.name.slice(0, 1));
          const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

          sourceClone.querySelector('.source__item-name').textContent = item.name;
          sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

          fragment.append(sourceClone);
          setTimeout(() => document.querySelector('.sources').append(fragment), 300);
        });
      });
    });
  }
}

export default Sources;
