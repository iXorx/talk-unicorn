export const Lang = () => {
  return (
    <div>
      <h2>Idioma no especificado</h2>
      <p>
        El lector de pantallas leerá con la entonación y gramática del idioma
        definido. Si no se define, el lector de pantallas no podrá leer el
        contenido correctamente.
      </p>
      <aside lang="en">
        <a href="https://webaim.org/projects/million/#languages">
          WebAIM Languages
        </a>
        <div>
          <h2>Languages</h2>

          <p>
            77% of pages specified a document language. Despite being a WCAG
            failure, pages without a language defined had fewer errors on
            average than most pages with a language defined.
          </p>

          <p>
            This table shows the specified page language for the most common
            languages, number of pages in the sample, average number of errors,
            and percentage difference in errors from the overall average.
          </p>

          <table>
            <tbody>
              <tr>
                <th>Specified Language</th>
                <th># of home pages</th>
                <th>Avg. # of errors</th>
                <th>% difference</th>
              </tr>
              <tr>
                <td>English</td>
                <td>488,599</td>
                <td>47.9</td>
                <td className="pos">−15.6%</td>
              </tr>
              <tr>
                <td>Dutch</td>
                <td>11,549</td>
                <td>50.3</td>
                <td className="pos">−11.4%</td>
              </tr>
              <tr>
                <td>German</td>
                <td>28,293</td>
                <td>54.3</td>
                <td className="pos">−4.4%</td>
              </tr>
              <tr>
                <td>No language specified</td>
                <td>160,101</td>
                <td>56.2</td>
                <td className="pos">−1.1%</td>
              </tr>
              <tr>
                <td>Japanese</td>
                <td>33,991</td>
                <td>60.1</td>
                <td className="neg">+5.9%</td>
              </tr>
              <tr>
                <td>French</td>
                <td>20,670</td>
                <td>62.3</td>
                <td className="neg">+9.6%</td>
              </tr>
              <tr>
                <td>Russian</td>
                <td>75,321</td>
                <td>64.4</td>
                <td className="neg">+13.4%</td>
              </tr>
              <tr>
                <td>Spanish</td>
                <td>30,242</td>
                <td>65.3</td>
                <td className="neg">+15.0%</td>
              </tr>
              <tr>
                <td>Portuguese</td>
                <td>26,703</td>
                <td>68.7</td>
                <td className="neg">+20.9%</td>
              </tr>
              <tr>
                <td>Italian</td>
                <td>10,882</td>
                <td>70.7</td>
                <td className="neg">+24.4%</td>
              </tr>
              <tr>
                <td>Polish</td>
                <td>8,805</td>
                <td>72.8</td>
                <td className="neg">+28.2%</td>
              </tr>
              <tr>
                <td>Turkish</td>
                <td>8,344</td>
                <td>74.7</td>
                <td className="neg">+31.5%</td>
              </tr>
              <tr>
                <td>Chinese</td>
                <td>8,298</td>
                <td>76.2</td>
                <td className="neg">+34.2%</td>
              </tr>
              <tr>
                <td>Farsi</td>
                <td>5,839</td>
                <td>78.3</td>
                <td className="neg">+37.9%</td>
              </tr>
              <tr>
                <td>Korean</td>
                <td>6,239</td>
                <td>86.9</td>
                <td className="neg">+53.1%</td>
              </tr>
              <tr>
                <td>Vietnamese</td>
                <td>5,609</td>
                <td>88.0</td>
                <td className="neg">+54.9%</td>
              </tr>
              <tr>
                <td>No linguistic content/not applicable (lang=zxx)</td>
                <td>7,218</td>
                <td>93.4</td>
                <td className="neg">+64.5%</td>
              </tr>
              <tr>
                <td>Indonesian</td>
                <td>11,813</td>
                <td>130.8</td>
                <td className="neg">+130.3%</td>
              </tr>
            </tbody>
          </table>

          <p>
            As with TLDs, there are significant differences in accessibility of
            pages in various languages. Latin-based languages generally fared
            much better than other languages.
          </p>
        </div>
      </aside>
    </div>
  );
};
