import { List } from '@alfalab/core-components/list';
import { Table } from '@alfalab/core-components/table';
import { Typography } from '@alfalab/core-components/typography';
import { appSt } from './style.css';

export const MoreInfo = () => {
  return (
    <div className={appSt.container}>
      <Typography.TitleResponsive tag="h1" view="large" font="system" weight="semibold">
        Альфа-трейдинг
      </Typography.TitleResponsive>
      <Typography.Text view="primary-medium">
        Операции с ценными бумагами и производными финансовыми инструментами
      </Typography.Text>

      <Table>
        <Table.THead>
          <Table.THeadCell title=""></Table.THeadCell>
          <Table.THeadCell title="Сделки покупки-продажи ценных бумаг на биржевых рынках">
            Сделки покупки-продажи ценных бумаг на биржевых рынках
          </Table.THeadCell>
          <Table.THeadCell title="Сделки покупки-продажи фьючерсов на биржевом рынке">
            Сделки покупки-продажи фьючерсов на биржевом рынке
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">Базовая ставка</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,049% от суммы сделки</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">2 ₽ за каждый контракт</Typography.Text>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>
      <Typography.Text view="primary-medium">
        Вознаграждение за сделки рассчитывается вне зависимости от типа биржи и равно разнице между Базовой ставкой и суммой
        скидок за выполнение Условий
      </Typography.Text>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Условие 1 – Скидка зависит от &lt;СЧА&gt; (среднемесячной стоимости чистых активов) за предыдущий календарный месяц
      </Typography.TitleResponsive>
      <Table>
        <Table.THead>
          <Table.THeadCell title="Диапазон СЧА за месяц">Диапазон СЧА за месяц</Table.THeadCell>
          <Table.THeadCell title="Скидка">Скидка</Table.THeadCell>
          <Table.THeadCell title="Абсолютная величина (₽)" textAlign="right">
            Абсолютная величина (₽)
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">свыше 200 000 руб., до 1 млн руб. включительно</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,002%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,05 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">свыше 1 млн руб., до 5 млн руб. включительно</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,0025%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,15 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">свыше 5 млн руб., до 20 млн руб. включительно</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,0035%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,25 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">свыше 20 млн руб.</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,004%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,31 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Условие 2 – Скидка зависит от количества месяцев непрерывной торговой деятельности подряд*
      </Typography.TitleResponsive>
      <Table>
        <Table.THead>
          <Table.THeadCell title="Период непрерывной торговли">Период непрерывной торговли</Table.THeadCell>
          <Table.THeadCell title="Скидка">Скидка</Table.THeadCell>
          <Table.THeadCell title="Абсолютная величина (₽)" textAlign="right">
            Абсолютная величина (₽)
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">два календарных месяца</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,003%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,15 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">три календарных месяца</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,009%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,30 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">четыре календарных месяца</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,014%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,50 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">пять и более календарных месяцев</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,016%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,65 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Условие 3 – Скидка зависит от того, во сколько раз за предыдущий календарный месяц суммарный объем сделок превышает
        &lt;СЧА&gt; или от количества контрактов в биржевых сделках с производными финансовыми инструментами (ПФИ) за месяц*
      </Typography.TitleResponsive>
      <Table>
        <Table.THead>
          <Table.THeadCell title="Условие">Условие</Table.THeadCell>
          <Table.THeadCell title="Скидка">Скидка</Table.THeadCell>
          <Table.THeadCell title="Абсолютная величина (₽)" textAlign="right">
            Абсолютная величина (₽)
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">
                объем сделок за месяц &gt; &lt;СЧА&gt; в 5 и более раз или 500–2000 биржевых контрактов
              </Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,005%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,20 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">
                объем сделок за месяц &gt; &lt;СЧА&gt; в 10 и более раз или 2000–5000 биржевых контрактов
              </Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,014%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,50 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">
                объем сделок за месяц &gt; &lt;СЧА&gt; в 20 и более раз или 5000–20000 биржевых контрактов
              </Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,018%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,80 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">
                объем сделок за месяц &gt; &lt;СЧА&gt; в 50 и более раз или свыше 20000 биржевых контрактов
              </Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,020%</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,95 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>
      <Typography.Text view="primary-medium">
        <em>* Для расчета скидок используется среднемесячная стоимость чистых активов (СЧА).</em>
      </Typography.Text>
      <Typography.Text view="primary-medium">
        <em>
          * Календарный месяц признается месяцем осуществления торговой деятельности, если выполняется хотя бы один из
          нижеуказанных критериев:
        </em>
      </Typography.Text>
      <List tag="ul">
        <List.Item>
          <Typography.Text view="primary-medium">объем сделок за календарный месяц превысил &lt;СЧА&gt;</Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            заключены сделки не менее чем 100 фьючерсных контрактов за месяц
          </Typography.Text>
        </List.Item>
      </List>
      <Typography.Text view="primary-medium">
        <em>При выполнении одновременно двух критериев применяется только одна скидка, размер которой больше.</em>
      </Typography.Text>

      <Typography.Text view="primary-medium">
        Дополнительное вознаграждение за исполнение расчётов по сделкам с ценными бумагами —{' '}
        <strong>0,02% от объёма сделок с ценными бумагами.</strong>
      </Typography.Text>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Сделки покупки-продажи БПИФ УК «Альфа-Капитал»
      </Typography.TitleResponsive>
      <Typography.Text view="primary-medium">
        Сделки покупки-продажи ценных бумаг на внебиржевом рынке — <b>бесплатно</b>
      </Typography.Text>
      <Typography.Text view="primary-medium">
        Сделки со структурными облигациями на внебиржевом рынке — <b>0,3% от суммы сделки</b>
      </Typography.Text>
      <Typography.Text view="primary-medium">
        Сделки покупки-продажи ценных бумаг на Московской бирже OTC с ЦК — <b>0,5% от суммы сделки</b>
      </Typography.Text>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Операции с иностранной валютой и драгоценными металлами
      </Typography.TitleResponsive>
      <Typography.Text view="primary-medium">
        Сделки покупки-продажи иностранной валюты — <b>0,049% от суммы сделки</b>
      </Typography.Text>
      <Typography.Text view="primary-medium">
        Дополнительное вознаграждение за исполнение расчётов по сделкам с иностранной валютой —{' '}
        <strong>0,02% от объёма сделок</strong>
      </Typography.Text>
      <Typography.Text view="primary-medium">
        Сделки покупки-продажи драгоценных металлов — <b>0,1% от суммы сделки</b>
      </Typography.Text>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Участие в размещениях
      </Typography.TitleResponsive>
      <List tag="ul">
        <List.Item>
          <Typography.Text view="primary-medium">
            сделки покупки облигаций при первичном размещении на биржевых рынках - <b>0,1% от объема сделок</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            сделки покупки ЗПИФ при первичном размещении - <b>3% от объема сделок</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            сделки покупки акций при участии в pre-IPO - <b>5% от объема сделок</b>
          </Typography.Text>
        </List.Item>
      </List>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Маржинальная торговля «с плечом»
      </Typography.TitleResponsive>
      <Table>
        <Table.THead>
          <Table.THeadCell title="Объём сделок РЕПО и СВОП, Руб.">Объём сделок РЕПО и СВОП, Руб.</Table.THeadCell>
          <Table.THeadCell title="В день" textAlign="right">
            В день
          </Table.THeadCell>
        </Table.THead>
        <Table.TBody>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 5 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">Бесплатно</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 30 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">30 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 90 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">90 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 200 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">190 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 650 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">590 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 1 500 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">1 360 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 3 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">2 690 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 6 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">5 290 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 9 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">7 690 ₽</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 35 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,084% от объёма сделок</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">до 100 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,078% от объёма сделок</Typography.Text>
            </Table.TCell>
          </Table.TRow>
          <Table.TRow>
            <Table.TCell>
              <Typography.Text view="primary-small">свыше 100 000 000</Typography.Text>
            </Table.TCell>
            <Table.TCell>
              <Typography.Text view="primary-small">0,068% от объёма сделок</Typography.Text>
            </Table.TCell>
          </Table.TRow>
        </Table.TBody>
      </Table>
      <Typography.Text view="primary-medium">
        Список ценных бумаг и иностранных валют, доступных для маржинальной торговли, опубликован в разделе{' '}
        <a href="https://alfabank.ru/make-money/investments/help/trebuemoe-obespechenie/">Требуемое обеспечение</a>.
      </Typography.Text>

      <Typography.TitleResponsive tag="h3" view="small" font="system" weight="semibold">
        Прочие услуги и условия
      </Typography.TitleResponsive>
      <List tag="ul">
        <List.Item>
          <Typography.Text view="primary-medium">
            Открытие брокерского счёта — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            Обслуживание брокерского счёта — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            Зачисление/вывод денежных средств на/с брокерского счёта — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            Использование мобильного терминала «Альфа-Инвестиции» — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            Использование торгового терминала «Альфа-Инвестиции» — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            Использование личного кабинета — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            За обработку поручения, направленного устно по телефону — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            За сделки принудительного сокращения обязательств (задолженности) — <b>бесплатно</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            За сделку покупки-продажи иностранной валюты взимается комиссия не менее 1 ₽ -{' '}
            <b>ЗОО ₽/день за финансовый инструмент</b>
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            За сделку покупки-продажи ценных бумаг на биржевом рынке Санкт-Петербургской биржи, если комиссия &lt; 1/100
            единицы валюты цены сделки × количество ценных бумаг, взимается комиссия = 1/100 единицы валюты цены сделки ×
            количество ценных бумаг в сделке
          </Typography.Text>
        </List.Item>
        <List.Item>
          <Typography.Text view="primary-medium">
            За исполнение расчётов по сделкам покупки-продажи ценных бумаг на биржевом рынке Санкт-Петербургской биржи — P10
            (за каждое ненулевое сальдо по ценной бумаге в день)
          </Typography.Text>
        </List.Item>
      </List>
      <Typography.Text view="primary-small" color="secondary">
        Полный перечень сопутствующих услуг и условий приведён в «Тарифах AO «АЛЬФА-БАНК» на брокерские услуги». НДС не
        облагается.
        <br />
        <br />* Данное описание приведено исключительно для целей первичного ознакомления и не предназначено для полного
        описания условий / тарифов на брокерские и депозитарные услуги. Для принятия решения о выборе того или иного
        тарифного плана необходимо ознакомиться с полными условиями, доступными в «Тарифах AO «АЛЬФА-БАНК» на брокерские
        услуги» и в «Тарифах AO «АЛЬФА-БАНК» на услуги депозитария», опубликованными в разделе «Документы»
        <a href="https://aIfabank.ru/make-monev/investments/help/docs">
          https://aIfabank.ru/make-monev/investments/help/docs
        </a>
        <br />
        <br />
        AO АЛЬФА-БАНК генеральная лицензия Банка России на осуществление банковских операций № 1326. Указанные условия
        действительны на дату печати и не являются офертой или приглашением делать оферты. Более подробная информация — на
        alfabank.ru или по телефону 8 495 755 58 58, 8 800 100 77 33.
      </Typography.Text>
    </div>
  );
};
