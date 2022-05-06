import React, { memo } from 'react'
import { Card, Typography, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

function Panel({ updateAt, onChange, country }) {

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div className="container-info">
          <div className="info">
            <Typography variant="h5" component="span" color="primary">COVID19</Typography>
            <Typography variant="h6" component="span">Painel Coronavírus</Typography>
            <Typography variant="body2" component="span">Atualizado em: {updateAt}</Typography>
          </div>          
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)