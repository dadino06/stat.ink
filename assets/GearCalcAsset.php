<?php
/**
 * @copyright Copyright (C) 2016 AIZAWA Hina
 * @license https://github.com/fetus-hina/stat.ink/blob/master/LICENSE MIT
 * @author AIZAWA Hina <hina@bouhime.com>
 */

namespace app\assets;

use yii\web\AssetBundle;

class GearCalcAsset extends AssetBundle
{
    public $sourcePath = '@app/resources/.compiled/gears';
    public $js = [
        'calc.js',
    ];
}
